import React, { useState, useEffect } from 'react';

function FileManager() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [newFileName, setNewFileName] = useState('');
  const [newFileExt, setNewFileExt] = useState('.txt');
  const [textContent, setTextContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/files');
      const data = await response.json();
      if (response.ok) {
        setFiles(data);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`Error fetching files: ${err.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 5000); 
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleApiCall = async (url, options, successMessage, shouldFetchFiles = false) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000${url}`, options);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to complete operation');
      }
      setMessage(successMessage);
      if (shouldFetchFiles) {
        if (options.method === 'POST') {
            const body = JSON.parse(options.body);
            setFiles(prevFiles => [...prevFiles, body.fileName]);
        } else if (options.method === 'DELETE') {
            const fileName = url.split('/').pop();
            setFiles(prevFiles => prevFiles.filter(f => f !== fileName));
            setSelectedFile('');
        }
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFile = async () => {
    if (!newFileName) {
      setMessage('Please enter a file name.');
      return;
    }
    const fileName = newFileName + newFileExt;
    await handleApiCall(
      '/api/files',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName }),
      },
      `File "${fileName}" created successfully.`,
      true
    );
    setNewFileName('');
  };

  const handleWriteFile = async () => {
    if (!selectedFile) {
      setMessage('Please select a file.');
      return;
    }
    await handleApiCall(
      `/api/files/${selectedFile}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: textContent }),
      },
      `Content written to "${selectedFile}" successfully.`
    );
    setTextContent('');
  };

  const handleAppendFile = async () => {
    if (!selectedFile) {
      setMessage('Please select a file.');
      return;
    }
    await handleApiCall(
      `/api/files/${selectedFile}`,
      {
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: textContent }),
      },
      `Content appended to "${selectedFile}" successfully.`
    );
    setTextContent('');
  };

  const handleDeleteFile = async () => {
    if (!selectedFile) {
      setMessage('Please select a file.');
      return;
    }
    if (window.confirm(`Are you sure you want to delete ${selectedFile}?`)) {
      await handleApiCall(
        `/api/files/${selectedFile}`,
        { method: 'DELETE' },
        `File "${selectedFile}" deleted successfully.`,
        true
      );
    }
  };

  return (
    <div className="p-5 border border-gray-300 m-5 rounded-lg shadow-lg bg-white">
      {loading && <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10"><div className="text-white text-xl">Loading...</div></div>}
      <h1 className="text-2xl font-bold mb-4 text-center">File Manager</h1>
      {message && <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">{message}</div>}
      
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">1. Create File</h2>
        <input type="text" value={newFileName} onChange={(e) => setNewFileName(e.target.value)} placeholder="Enter file name" className="border p-2 rounded mr-2" />
        <select value={newFileExt} onChange={(e) => setNewFileExt(e.target.value)} className="border p-2 rounded mr-2">
          <option value=".txt">.txt</option>
          <option value=".json">.json</option>
          <option value=".md">.md</option>
        </select>
        <button onClick={handleCreateFile} disabled={loading} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300">Create File</button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">2. Insert Text</h2>
          <FileSelector files={files} selectedFile={selectedFile} onSelect={setSelectedFile} />
          <textarea value={textContent} onChange={(e) => setTextContent(e.target.value)} placeholder="Enter content to write" className="border p-2 rounded w-full mt-2" rows="3"></textarea>
          <button onClick={handleWriteFile} disabled={loading || !selectedFile} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2 w-full disabled:bg-green-300">Replace Content</button>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">3. Append Data</h2>
          <FileSelector files={files} selectedFile={selectedFile} onSelect={setSelectedFile} />
          <textarea value={textContent} onChange={(e) => setTextContent(e.target.value)} placeholder="Enter content to append" className="border p-2 rounded w-full mt-2" rows="3"></textarea>
          <button onClick={handleAppendFile} disabled={loading || !selectedFile} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 mt-2 w-full disabled:bg-yellow-300">Append Data</button>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">4. Delete File</h2>
          <FileSelector files={files} selectedFile={selectedFile} onSelect={setSelectedFile} />
          <button onClick={handleDeleteFile} disabled={loading || !selectedFile} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-2 w-full disabled:bg-red-300">Delete File</button>
        </div>
      </div>
    </div>
  );
}

const FileSelector = ({ files, selectedFile, onSelect }) => (
  <select value={selectedFile} onChange={(e) => onSelect(e.target.value)} className="border p-2 rounded w-full">
    <option value="">-- Select a file --</option>
    {files.map(file => (
      <option key={file} value={file}>{file}</option>
    ))}
  </select>
);

export default FileManager;