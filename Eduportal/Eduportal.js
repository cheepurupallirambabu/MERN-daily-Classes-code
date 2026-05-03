
const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer.",
        category: "web-development",
        difficulty: "beginner",
        instructor: "John Smith",
        rating: 4.8,
        students: 15000,
        duration: "40 hours",
        lessons: 120,
        thumbnail: "fa-code"
    },
    {
        id: 2,
        title: "Artificial Intelligence & Machine Learning",
        description: "Master AI concepts, neural networks, and build intelligent applications.",
        category: "ai",
        difficulty: "advanced",
        instructor: "Dr. Sarah Johnson",
        rating: 4.9,
        students: 8500,
        duration: "35 hours",
        lessons: 90,
        thumbnail: "fa-brain"
    },
    {
        id: 3,
        title: "Data Science with Python",
        description: "Analyze data, create visualizations, and build predictive models with Python.",
        category: "data-science",
        difficulty: "intermediate",
        instructor: "Mike Chen",
        rating: 4.7,
        students: 12000,
        duration: "30 hours",
        lessons: 80,
        thumbnail: "fa-chart-line"
    },
    {
        id: 4,
        title: "React Native Mobile Development",
        description: "Build cross-platform mobile apps for iOS and Android with React Native.",
        category: "mobile",
        difficulty: "intermediate",
        instructor: "Emily Davis",
        rating: 4.6,
        students: 6500,
        duration: "25 hours",
        lessons: 70,
        thumbnail: "fa-mobile-alt"
    },
    {
        id: 5,
        title: "Advanced JavaScript Patterns",
        description: "Deep dive into JavaScript design patterns, closures, and advanced concepts.",
        category: "web-development",
        difficulty: "advanced",
        instructor: "Alex Thompson",
        rating: 4.9,
        students: 5000,
        duration: "20 hours",
        lessons: 60,
        thumbnail: "fa-js"
    },
    {
        id: 6,
        title: "Deep Learning with TensorFlow",
        description: "Build neural networks and deep learning models using TensorFlow.",
        category: "ai",
        difficulty: "advanced",
        instructor: "Dr. Lisa Wang",
        rating: 4.8,
        students: 7200,
        duration: "30 hours",
        lessons: 85,
        thumbnail: "fa-network-wired"
    },
    {
        id: 7,
        title: "SQL Database Management",
        description: "Master SQL queries, database design, and data management.",
        category: "data-science",
        difficulty: "beginner",
        instructor: "Robert Brown",
        rating: 4.5,
        students: 9500,
        duration: "15 hours",
        lessons: 45,
        thumbnail: "fa-database"
    },
    {
        id: 8,
        title: "Flutter App Development",
        description: "Create beautiful, natively compiled mobile applications with Flutter.",
        category: "mobile",
        difficulty: "beginner",
        instructor: "Anna Martinez",
        rating: 4.7,
        students: 11000,
        duration: "28 hours",
        lessons: 75,
        thumbnail: "fa-google"
    },
    {
        id: 9,
        title: "HTML5 & CSS3 Mastery",
        description: "Build modern, responsive websites with HTML5 and CSS3.",
        category: "web-development",
        difficulty: "beginner",
        instructor: "Chris Lee",
        rating: 4.6,
        students: 18000,
        duration: "18 hours",
        lessons: 50,
        thumbnail: "fa-html5"
    },
    {
        id: 10,
        title: "Natural Language Processing",
        description: "Learn to process and analyze human language with NLP techniques.",
        category: "ai",
        difficulty: "intermediate",
        instructor: "Dr. James Wilson",
        rating: 4.8,
        students: 4800,
        duration: "22 hours",
        lessons: 65,
        thumbnail: "fa-comments"
    }
];

const quizQuestions = {
    1: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], correct: 0 },
        { question: "Which CSS property is used to change text color?", options: ["text-color", "font-color", "color", "text-style"], correct: 2 },
        { question: "What is the correct way to declare a variable in JavaScript?", options: ["var x = 5", "variable x = 5", "v x = 5", "int x = 5"], correct: 0 },
        { question: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<head>"], correct: 1 },
        { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 1 }
    ],
    5: [
        { question: "What is a closure in JavaScript?", options: ["A way to close browser", "A function with access to outer scope", "A method to end code", "A type of loop"], correct: 1 },
        { question: "What is the purpose of 'this' keyword?", options: ["Refers to current object", "Ends a function", "Creates new variable", "Defines a class"], correct: 0 },
        { question: "What is event bubbling?", options: ["Event goes up the DOM", "Event goes down the DOM", "Event stays in one place", "Event deletes elements"], correct: 0 },
        { question: "What is a Promise in JavaScript?", options: ["A guarantee of code", "An object representing async operation", "A type of loop", "A debugging tool"], correct: 1 },
        { question: "What does '===' operator do?", options: ["Assigns value", "Checks value only", "Checks value and type", "Compares strings"], correct: 2 }
    ]
};

const leaderboardData = [
    { name: "Emma Watson", points: 2500, courses: 12 },
    { name: "David Kim", points: 2350, courses: 11 },
    { name: "Sophie Chen", points: 2200, courses: 10 },
    { name: "James Wilson", points: 2100, courses: 9 },
    { name: "Olivia Brown", points: 1950, courses: 9 },
    { name: "Liam Davis", points: 1800, courses: 8 },
    { name: "Ava Martinez", points: 1700, courses: 8 },
    { name: "Noah Johnson", points: 1650, courses: 7 },
    { name: "Isabella Lee", points: 1500, courses: 7 },
    { name: "Ethan Taylor", points: 1450, courses: 6 }
];

const achievementsData = [
    { id: 'first_course', title: 'First Step', description: 'Enroll in your first course', icon: 'fa-shoe-prints' },
    { id: 'course_complete', title: 'Finisher', description: 'Complete your first course', icon: 'fa-flag-checkered' },
    { id: 'quiz_master', title: 'Quiz Master', description: 'Score 100% on a quiz', icon: 'fa-brain' },
    { id: 'five_courses', title: 'Avid Learner', description: 'Enroll in 5 courses', icon: 'fa-book-reader' },
    { id: 'web_dev_pro', title: 'Web Dev Pro', description: 'Complete all Web Development courses', icon: 'fa-code' }
];

// ==================== STATE ====================
let state = {
    enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses')) || [],
    progress: JSON.parse(localStorage.getItem('progress')) || {},
    bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
    quizScore: 0,
    currentQuestion: 0,
    currentQuiz: [],
    selectedQuiz: null,
    studentName: localStorage.getItem('studentName') || 'Student Name',
    theme: localStorage.getItem('theme') || 'light',
    notifications: [
        { id: 1, title: 'Welcome to EduPortal!', time: 'Just now', icon: 'fa-hand-wave', unread: true },
        { id: 2, title: 'New Web Dev Course Added', time: '2 hours ago', icon: 'fa-book-open', unread: false }
    ],
    earnedAchievements: JSON.parse(localStorage.getItem('earnedAchievements')) || []
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderCourses();
    renderRecommendations();
    renderLeaderboard();
    renderEnrolledCourses();
    updateProfileStats();
    setupEventListeners();
    populateQuizSelect();
    applyStoredProgress();
    applyTheme();
    renderProfile();
    renderNotifications();
    renderAchievements();
    checkAllAchievements();
}

function renderProfile() {
    const nameInput = document.getElementById('studentName');
    if (nameInput) {
        nameInput.value = state.studentName;
    }
    const avatar = document.querySelector('.profile-avatar');
    if (avatar) {
        avatar.textContent = state.studentName ? state.studentName.charAt(0).toUpperCase() : '?';
    }
}

// ==================== COURSES RENDERING ====================
function renderCourses(filteredCourses = null) {
    const courses = filteredCourses || coursesData;
    const grid = document.getElementById('courseGrid');
    
    grid.innerHTML = courses.map(course => `
        <div class="course-card" data-id="${course.id}" tabindex="0" role="button" aria-label="View ${course.title}">
            <div class="course-thumbnail">
                <i class="fas ${course.thumbnail}"></i>
                <span class="course-badge">${course.difficulty}</span>
                <button class="course-bookmark ${state.bookmarks.includes(course.id) ? 'active' : ''}" 
                        data-id="${course.id}" aria-label="Bookmark ${course.title}">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
            <div class="course-info">
                <span class="course-category">${formatCategory(course.category)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span class="course-instructor">
                        <i class="fas fa-user"></i> ${course.instructor}
                    </span>
                    <span class="course-rating">
                        <i class="fas fa-star"></i> ${course.rating}
                    </span>
                </div>
            </div>
            <div class="course-progress-container" id="progress-${course.id}">
                <div class="course-progress-label">
                    <span>Progress</span>
                    <span>${state.progress[course.id] || 0}%</span>
                </div>
                <div class="course-progress-bar">
                    <div class="course-progress-fill" style="width: ${state.progress[course.id] || 0}%"></div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click events
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.course-bookmark')) {
                openCourseModal(parseInt(card.dataset.id));
            }
        });
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                openCourseModal(parseInt(card.dataset.id));
            }
        });
    });

    // Add bookmark events
    document.querySelectorAll('.course-bookmark').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(parseInt(btn.dataset.id));
        });
    });
}

function renderRecommendations() {
    const grid = document.getElementById('recommendationGrid');
    const recommendations = coursesData.slice(0, 4);
    
    grid.innerHTML = recommendations.map(course => `
        <div class="course-card" data-id="${course.id}" tabindex="0" role="button" aria-label="View ${course.title}">
            <div class="course-thumbnail">
                <i class="fas ${course.thumbnail}"></i>
            </div>
            <div class="course-info">
                <span class="course-category">${formatCategory(course.category)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('#recommendationGrid .course-card').forEach(card => {
        card.addEventListener('click', () => openCourseModal(parseInt(card.dataset.id)));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') openCourseModal(parseInt(card.dataset.id));
        });
    });
}

function formatCategory(category) {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// ==================== COURSE MODAL ====================
function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    const isEnrolled = state.enrolledCourses.includes(courseId);

    modalBody.innerHTML = `
        <div class="modal-thumbnail">
            <i class="fas ${course.thumbnail}"></i>
        </div>
        <span class="modal-course-category">${formatCategory(course.category)}</span>
        <h2 class="modal-course-title">${course.title}</h2>
        <p class="modal-course-description">${course.description}</p>
        <div class="modal-course-details">
            <div class="detail-item">
                <i class="fas fa-clock"></i>
                <span>Duration</span>
                <strong>${course.duration}</strong>
            </div>
            <div class="detail-item">
                <i class="fas fa-book"></i>
                <span>Lessons</span>
                <strong>${course.lessons}</strong>
            </div>
            <div class="detail-item">
                <i class="fas fa-users"></i>
                <span>Students</span>
                <strong>${course.students.toLocaleString()}</strong>
            </div>
            <div class="detail-item">
                <i class="fas fa-star"></i>
                <span>Rating</span>
                <strong>${course.rating}</strong>
            </div>
        </div>
        <button class="enroll-btn ${isEnrolled ? 'enrolled' : ''}" id="enrollBtn" data-id="${courseId}">
            ${isEnrolled ? '<i class="fas fa-check"></i> Enrolled' : '<i class="fas fa-plus"></i> Enroll Now'}
        </button>
    `;

    modal.classList.add('active');

    document.getElementById('enrollBtn').addEventListener('click', () => {
        toggleEnrollment(courseId);
    });
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('active');
}

function toggleEnrollment(courseId) {
    const index = state.enrolledCourses.indexOf(courseId);
    if (index > -1) {
        state.enrolledCourses.splice(index, 1);
        showToast('Course removed from enrolled courses');
    } else {
        state.enrolledCourses.push(courseId);
        state.progress[courseId] = 0;
        showToast('Course enrolled successfully!');
    }
    
    localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
    localStorage.setItem('progress', JSON.stringify(state.progress));
    
    renderEnrolledCourses();
    updateProfileStats();
    updateEnrollButton(courseId);
    checkAllAchievements();
    renderCourses();
}

function updateEnrollButton(courseId) {
    const btn = document.getElementById('enrollBtn');
    if (btn) {
        const isEnrolled = state.enrolledCourses.includes(courseId);
        btn.className = `enroll-btn ${isEnrolled ? 'enrolled' : ''}`;
        btn.innerHTML = isEnrolled 
            ? '<i class="fas fa-check"></i> Enrolled' 
            : '<i class="fas fa-plus"></i> Enroll Now';
    }
}

// ==================== BOOKMARKS ====================
function toggleBookmark(courseId) {
    const index = state.bookmarks.indexOf(courseId);
    if (index > -1) {
        state.bookmarks.splice(index, 1);
        showToast('Course removed from bookmarks');
    } else {
        state.bookmarks.push(courseId);
        showToast('Course added to bookmarks!');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkCount();
    renderCourses();
    renderBookmarkList();
}

function updateBookmarkCount() {
    document.getElementById('bookmarkCount').textContent = state.bookmarks.length;
}

function renderBookmarkList() {
    const list = document.getElementById('bookmarkList');
    if (state.bookmarks.length === 0) {
        list.innerHTML = '<p class="empty-state">No bookmarked courses yet</p>';
        return;
    }

    const bookmarkedCourses = coursesData.filter(c => state.bookmarks.includes(c.id));
    list.innerHTML = bookmarkedCourses.map(course => `
        <div class="bookmark-item">
            <div class="bookmark-item-info">
                <h4>${course.title}</h4>
                <span>${formatCategory(course.category)}</span>
            </div>
            <button class="remove-bookmark" data-id="${course.id}" aria-label="Remove bookmark">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    list.querySelectorAll('.remove-bookmark').forEach(btn => {
        btn.addEventListener('click', () => toggleBookmark(parseInt(btn.dataset.id)));
    });
}

// ==================== DASHBOARD ====================
function renderEnrolledCourses() {
    const container = document.getElementById('enrolledCourses');
    if (state.enrolledCourses.length === 0) {
        container.innerHTML = '<p class="empty-state">No courses enrolled yet</p>';
        return;
    }

    const enrolled = coursesData.filter(c => state.enrolledCourses.includes(c.id));
    container.innerHTML = enrolled.map(course => `
        <div class="enrolled-course-item">
            <div class="enrolled-course-info">
                <h4>${course.title}</h4>
                <span>${formatCategory(course.category)}</span>
            </div>
            <div class="course-progress-container" style="width: 150px;">
                <div class="course-progress-bar">
                    <div class="course-progress-fill" style="width: ${state.progress[course.id] || 0}%"></div>
                </div>
                <span style="font-size: 0.85rem;">${state.progress[course.id] || 0}%</span>
            </div>
        </div>
    `).join('');
}

function applyStoredProgress() {
    state.enrolledCourses.forEach(courseId => {
        if (!state.progress[courseId]) {
            state.progress[courseId] = 0;
        }
    });
    localStorage.setItem('progress', JSON.stringify(state.progress));
}

function renderAchievements() {
    const container = document.getElementById('achievementsList');
    if (!container) return;

    if (state.earnedAchievements.length === 0) {
        container.innerHTML = '<p class="empty-state">No achievements yet. Keep learning!</p>';
        return;
    }

    container.innerHTML = state.earnedAchievements.map(achId => {
        const achievement = achievementsData.find(a => a.id === achId);
        if (!achievement) return '';
        return `
            <div class="achievement" title="${achievement.description}">
                <i class="fas ${achievement.icon}"></i>
                <span>${achievement.title}</span>
            </div>
        `;
    }).join('');
}

function checkAndAwardAchievement(achievementId) {
    if (!state.earnedAchievements.includes(achievementId)) {
        state.earnedAchievements.push(achievementId);
        localStorage.setItem('earnedAchievements', JSON.stringify(state.earnedAchievements));
        const achievement = achievementsData.find(a => a.id === achievementId);
        if (achievement) {
            showToast(`Achievement Unlocked: ${achievement.title}!`);
        }
        renderAchievements();
    }
}

function checkAllAchievements() {
    if (state.enrolledCourses.length >= 1) checkAndAwardAchievement('first_course');
    if (state.enrolledCourses.length >= 5) checkAndAwardAchievement('five_courses');
    if (Object.values(state.progress).some(p => p === 100)) checkAndAwardAchievement('course_complete');
    
    const webDevCourses = coursesData.filter(c => c.category === 'web-development');
    const allWebDevCompleted = webDevCourses.every(c => state.progress[c.id] === 100);
    if (webDevCourses.length > 0 && allWebDevCompleted) checkAndAwardAchievement('web_dev_pro');
}

function updateProfileStats() {
    document.getElementById('profileCourses').textContent = state.enrolledCourses.length;
    
    const completed = Object.values(state.progress).filter(p => p === 100).length;
    document.getElementById('profileCompleted').textContent = completed;
    
    const totalProgress = state.enrolledCourses.length > 0 
        ? Math.round(Object.values(state.progress).reduce((a, b) => a + b, 0) / state.enrolledCourses.length)
        : 0;
    document.getElementById('totalProgress').style.width = totalProgress + '%';
    document.getElementById('totalProgressText').textContent = totalProgress + '%';
    document.getElementById('profilePoints').textContent = totalProgress * 10;
}

// ==================== LEADERBOARD ====================
function renderLeaderboard() {
    const list = document.getElementById('leaderboardList');
    list.innerHTML = leaderboardData.map((student, index) => `
        <div class="leaderboard-item ${index < 3 ? 'top-3' : ''}">
            <span class="rank">#${index + 1}</span>
            <div class="student">
                <div class="student-avatar">${student.name.charAt(0)}</div>
                <span class="student-name">${student.name}</span>
            </div>
            <span class="points">${student.points} pts</span>
            <span class="courses-count">${student.courses} courses</span>
        </div>
    `).join('');
}

// ==================== QUIZ ====================
function populateQuizSelect() {
    const select = document.getElementById('quizCourseSelect');
    const coursesWithQuiz = coursesData.filter(c => quizQuestions[c.id]);
    
    select.innerHTML = '<option value="">Select a course</option>' + 
        coursesWithQuiz.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
}

function startQuiz() {
    const courseId = parseInt(document.getElementById('quizCourseSelect').value);
    if (!courseId || !quizQuestions[courseId]) {
        showToast('Please select a course with a quiz');
        return;
    }

    state.selectedQuiz = courseId;
    state.currentQuiz = [...quizQuestions[courseId]];
    state.quizScore = 0;
    state.currentQuestion = 0;

    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';

    renderQuestion();
}

function renderQuestion() {
    const question = state.currentQuiz[state.currentQuestion];
    if (!question) {
        showQuizResult();
        return;
    }

    document.getElementById('quizProgress').textContent = 
        `Question ${state.currentQuestion + 1} of ${state.currentQuiz.length}`;
    document.getElementById('quizScore').textContent = `Score: ${state.quizScore}`;

    document.getElementById('quizQuestion').textContent = question.question;
    
    document.getElementById('quizOptions').innerHTML = question.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}">
            <input type="radio" name="quiz" id="option${i}" value="${i}">
            <label for="option${i}">${opt}</label>
        </div>
    `).join('');

    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
        });
    });
}

function nextQuestion() {
    const selected = document.querySelector('.quiz-option.selected');
    if (!selected) {
        showToast('Please select an answer');
        return;
    }

    const answer = parseInt(selected.dataset.index);
    const question = state.currentQuiz[state.currentQuestion];

    if (answer === question.correct) {
        state.quizScore++;
        selected.classList.add('correct');
    } else {
        selected.classList.add('wrong');
        document.querySelector(`.quiz-option[data-index="${question.correct}"]`).classList.add('correct');
    }

    setTimeout(() => {
        state.currentQuestion++;
        if (state.currentQuestion < state.currentQuiz.length) {
            renderQuestion();
        } else {
            showQuizResult();
        }
    }, 1000);
}

function showQuizResult() {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    document.getElementById('finalScore').textContent = state.quizScore;
    
    const percentage = (state.quizScore / state.currentQuiz.length) * 100;
    let message = '';
    if (percentage >= 80) message = 'Excellent! You\'re a master! 🏆';
    else if (percentage >= 60) message = 'Great job! Keep practicing! 👍';
    else if (percentage >= 40) message = 'Good effort! Try again! 💪';
    else message = 'Keep practicing! You can do it! 📚';
    
    document.getElementById('resultMessage').textContent = message;

    if (percentage >= 100) {
        checkAndAwardAchievement('quiz_master');
    }

    // Update progress if course is enrolled
    if (state.selectedQuiz && state.enrolledCourses.includes(state.selectedQuiz)) {
        state.progress[state.selectedQuiz] = Math.max(state.progress[state.selectedQuiz] || 0, percentage);
        localStorage.setItem('progress', JSON.stringify(state.progress));
        renderEnrolledCourses();
        checkAllAchievements();
        updateProfileStats();
    }
}

function retakeQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizIntro').style.display = 'block';
    state.currentQuiz = [];
    state.quizScore = 0;
    state.currentQuestion = 0;
}

// ==================== SEARCH & FILTER ====================
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        renderCourses();
        return;
    }

    const filtered = coursesData.filter(c => 
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query)
    );
    
    renderCourses(filtered);
    showToast(`Found ${filtered.length} courses`);
}

function handleFilter() {
    const category = document.getElementById('categoryFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;

    let filtered = [...coursesData];

    if (category !== 'all') {
        filtered = filtered.filter(c => c.category === category);
    }

    if (difficulty !== 'all') {
        filtered = filtered.filter(c => c.difficulty === difficulty);
    }

    renderCourses(filtered);
}

// ==================== NOTIFICATIONS ====================
function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
    document.getElementById('bookmarkPanel').classList.remove('active');

    // Mark notifications as read when panel is opened
    if (panel.classList.contains('active') && state.notifications.some(n => n.unread)) {
        setTimeout(() => {
            state.notifications.forEach(n => n.unread = false);
            // No need to persist notification state for this demo
            renderNotifications(); // Re-render to remove 'unread' style and update badge
        }, 2000); // Delay to allow user to see what was new
    }
}

function closeNotificationPanel() {
    document.getElementById('notificationPanel').classList.remove('active');
}

// ==================== BOOKMARK PANEL ====================
function toggleBookmarkPanel() {
    const panel = document.getElementById('bookmarkPanel');
    panel.classList.toggle('active');
    document.getElementById('notificationPanel').classList.remove('active');
    renderBookmarkList();
}

function closeBookmarkPanel() {
    document.getElementById('bookmarkPanel').classList.remove('active');
}

function renderNotifications() {
    const list = document.querySelector('.notification-list');
    if (!list) return;

    list.innerHTML = state.notifications.map(notif => `
        <div class="notification-item ${notif.unread ? 'unread' : ''}">
            <i class="fas ${notif.icon}"></i>
            <div class="notif-content">
                <p>${notif.title}</p>
                <span class="notif-time">${notif.time}</span>
            </div>
        </div>
    `).join('');

    const badge = document.querySelector('.notification-badge');
    if (badge) {
        const unreadCount = state.notifications.filter(n => n.unread).length;
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ==================== CONTACT FORM ====================
function validateContactForm(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        document.getElementById('name').parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
        document.getElementById('name').parentElement.classList.remove('error');
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        document.getElementById('email').parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
        document.getElementById('email').parentElement.classList.remove('error');
    }
    
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        document.getElementById('message').parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
        document.getElementById('message').parentElement.classList.remove('error');
    }
    
    if (isValid) {
        const form = document.getElementById('contactForm');
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Simulate network delay
        setTimeout(() => {
            showToast('Message sent successfully! We\'ll get back to you soon.');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
            
            // Clear error messages on successful submission
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.form-group.error').forEach(el => el.classList.remove('error'));
        }, 1500);
    }
}

// ==================== PROFILE ====================
function updateStudentName() {
    const name = document.getElementById('studentName').value.trim();
    if (name) {
        if (name !== state.studentName) {
            state.studentName = name;
            localStorage.setItem('studentName', name);
            showToast('Profile name updated!');
            renderProfile();
        }
    } else {
        document.getElementById('studentName').value = state.studentName; // Revert if empty
        showToast('Name cannot be empty.');
    }
}

// ==================== TOAST ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== THEME ====================
function applyTheme() {
    if (state.theme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', state.theme === 'dark');
    updateThemeIcon(state.theme === 'dark');
    localStorage.setItem('theme', state.theme);
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Search
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Filters
    document.getElementById('categoryFilter').addEventListener('change', handleFilter);
    document.getElementById('difficultyFilter').addEventListener('change', handleFilter);
    
    // Notifications
    document.getElementById('notificationBtn').addEventListener('click', toggleNotificationPanel);
    document.getElementById('closeNotif').addEventListener('click', closeNotificationPanel);
    
    // Bookmarks
    document.getElementById('bookmarkBtn').addEventListener('click', toggleBookmarkPanel);
    document.getElementById('closeBookmark').addEventListener('click', closeBookmarkPanel);
    
    // Mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });
    
    // Theme toggle
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Course modal
    document.getElementById('closeModal').addEventListener('click', closeCourseModal);
    document.getElementById('courseModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('courseModal')) {
            closeCourseModal();
        }
    });
    
    // Quiz
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
    document.getElementById('retakeQuiz').addEventListener('click', retakeQuiz);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', validateContactForm);
    
    // Profile
    document.getElementById('studentName').addEventListener('change', updateStudentName);
    const editAvatarBtn = document.querySelector('.edit-avatar');
    if (editAvatarBtn) {
        editAvatarBtn.addEventListener('click', () => {
            document.getElementById('studentName').focus();
            document.getElementById('studentName').select();
        });
    }
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('categoryFilter').value = category;
            handleFilter();
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Dropdown menu
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            document.getElementById('categoryFilter').value = category;
            handleFilter();
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCourseModal();
            closeNotificationPanel();
            closeBookmarkPanel();
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== PROGRESS SIMULATION (Bonus) ====================
// Simulate progress for demo purposes
function simulateProgress() {
    state.enrolledCourses.forEach(courseId => {
        if (state.progress[courseId] < 100) {
            state.progress[courseId] = Math.min(100, (state.progress[courseId] || 0) + Math.floor(Math.random() * 20));
        }
    });
    localStorage.setItem('progress', JSON.stringify(state.progress));
    renderEnrolledCourses();
    updateProfileStats();
    checkAllAchievements();
    renderCourses();
}

// Auto-update progress every 30 seconds for demo
setInterval(simulateProgress, 30000);

// ==================== KEYBOARD ACCESSIBILITY ====================
// Add skip link for accessibility
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
document.body.insertBefore(skipLink, document.body.firstChild);

// Make entire course card keyboard accessible
document.querySelectorAll('.course-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
});