// '누구나 시인' Web Application Core Logic

// 1. 365 Emotional & Poetic Themes (365 감정 언어 배열)
const EMOTION_WORDS = [
    "그리움", "설렘", "새벽", "노을", "바람", "침묵", "기다림", "발자국", "낙엽", "바다",
    "하늘", "별빛", "구름", "빗소리", "안개", "햇살", "그림자", "향기", "메아리", "기억",
    "흔적", "온기", "고독", "만남", "이별", "약속", "조각", "여운", "첫눈", "이슬",
    "파도", "달빛", "모닥불", "시간", "낙서", "비밀", "눈빛", "숨결", "동행", "인연",
    "겨울비", "낙화", "창가", "기적", "추억", "바램", "소리", "미련", "속삭임", "소낙비",
    "물방울", "아침", "우산", "기차", "엽서", "기둥", "바위", "꽃잎", "풀잎", "숲길",
    "한숨", "눈물", "미소", "미완", "흔들림", "머무름", "스쳐감", "눈부심", "아련함", "고요",
    "평온", "설풍", "아지랑이", "봄볕", "단풍", "초승달", "그믐달", "만월", "은하수", "혜성",
    "밤하늘", "지평선", "수평선", "파도소리", "모래성", "조개껍데기", "바람개비", "종이비행기", "풍선", "연기",
    "불꽃", "재", "촛불", "등대", "나침반", "지도", "열쇠", "자물쇠", "거울", "시계",
    "모래시계", "일기장", "편지", "우체통", "전화기", "골목길", "가로등", "그네", "의자", "창문",
    "지붕", "벽돌", "굴뚝", "지붕 밑", "다락방", "계단", "문고리", "열쇠구멍", "액자", "책방",
    "책갈피", "만년필", "잉크", "원고지", "지우개", "연필", "크레파스", "도화지", "물감", "붓",
    "조각상", "미술관", "피아노", "기타", "바이올린", "오르골", "선율", "화음", "리듬", "노래",
    "목소리", "메아리", "귓속말", "독백", "방백", "대화", "만남", "스침", "헤어짐", "재회",
    "기다림", "단념", "체념", "기대", "희망", "소원", "꿈", "환상", "망상", "착각",
    "현실", "일상", "탈출", "여행", "길", "여정", "나그네", "발자국", "먼지", "바람",
    "태풍", "미풍", "폭풍", "돌풍", "소용돌이", "잔잔함", "파동", "울림", "진동", "소리",
    "침묵", "정적", "소음", "불협화음", "하모니", "연주", "지휘", "음표", "쉼표", "마침표",
    "느낌표", "물음표", "쉼표", "말줄임표", "괄호", "따옴표", "글자", "문장", "문단", "책",
    "도서관", "서점", "독서", "사색", "명상", "철학", "종교", "기도", "고백", "참회",
    "용서", "화해", "이해", "오해", "갈등", "화합", "평화", "전쟁", "싸움", "상처",
    "흉터", "치유", "아픔", "고통", "슬픔", "기쁨", "환희", "우울", "불안", "두려움",
    "공포", "용기", "희망", "절망", "좌절", "도전", "성공", "실패", "노력", "인내",
    "끈기", "포기", "선택", "결정", "후회", "반성", "성장", "성숙", "노화", "죽음",
    "탄생", "생명", "존재", "가치", "의미", "무의미", "허무", "공허", "충만", "만족",
    "행복", "불행", "행운", "불운", "우연", "필연", "운명", "숙명", "자유", "구속",
    "해방", "독립", "연대", "협력", "경쟁", "시기", "질투", "선망", "존경", "사랑",
    "우정", "애정", "증오", "분노", "적개심", "친밀함", "거리감", "소외감", "고독", "외로움",
    "쓸쓸함", "허전함", "포근함", "따뜻함", "차가움", "냉정", "열정", "냉정", "순수", "오염",
    "변화", "불변", "영원", "순간", "찰나", "영겁", "과거", "현재", "미래", "어제",
    "오늘", "내일", "하루", "한 달", "일년", "세월", "광음", "시공간", "차원", "우주",
    "은하", "태양", "달", "지구", "행성", "위성", "별", "별자리", "은하수", "성운",
    "블랙홀", "초신성", "우주선", "비행사", "하늘", "바람", "구름", "비", "눈", "우박",
    "안개", "서리", "이슬", "무지개", "번개", "천둥", "노을", "새벽녁", "아침 해", "정오",
    "오후", "저녁", "밤", "심야", "자정", "여명", "황혼", "개똥벌레", "반딧불이", "귀뚜라미",
    "매미", "나비", "벌", "거미", "개미", "잠자리", "새", "깃털", "날개", "둥지",
    "나무", "숲", "산", "계곡", "강", "바다", "섬", "해변", "파도", "조수",
    "썰물", "밀물", "해류", "심해", "해초", "물고기", "고래", "갈매기", "조개", "진주",
    "산호", "등대", "항구", "배", "돛대", "닻", "항해", "표류", "귀향", "안식처"
];

// 2. State Variable (어플리케이션 상태 관리)
let state = {
    currentUser: null,       // 현재 로그인 유저 정보 {username, signupDate}
    activeTab: 'write',      // 'write' | 'archive'
    virtualTime: null,       // 가상 현재 시각 (Date object) - 시뮬레이터용
    virtualSignupDate: null, // 가상 가입 날짜 (String 'YYYY-MM-DD') - 시뮬레이터용
    autoSaveTimer: null      // 자동 저장 디바운스 타이머
};

// 3. LocalStorage Helpers (로컬 스토리지 데이터 제어)
const db = {
    getUsers() {
        return JSON.parse(localStorage.getItem('poet_users') || '[]');
    },
    saveUsers(users) {
        localStorage.setItem('poet_users', JSON.stringify(users));
    },
    getDiaries() {
        return JSON.parse(localStorage.getItem('poet_diaries') || '[]');
    },
    saveDiaries(diaries) {
        localStorage.setItem('poet_diaries', JSON.stringify(diaries));
    },
    getTempSave(username) {
        return JSON.parse(localStorage.getItem(`poet_temp_${username}`) || 'null');
    },
    saveTempSave(username, tempObj) {
        localStorage.setItem(`poet_temp_${username}`, JSON.stringify(tempObj));
    },
    clearTempSave(username) {
        localStorage.removeItem(`poet_temp_${username}`);
    }
};

// 4. Utility Functions (날짜 및 경과일수 계산 유틸리티)

// 시뮬레이터 날짜 혹은 실제 시스템 날짜를 가져옵니다.
function getCurrentDate() {
    return state.virtualTime ? new Date(state.virtualTime) : new Date();
}

// 가입일자를 획득합니다 (시뮬레이터 설정 우선)
function getSignupDate() {
    if (state.virtualSignupDate) {
        return new Date(state.virtualSignupDate + "T00:00:00");
    }
    if (state.currentUser && state.currentUser.signupDate) {
        return new Date(state.currentUser.signupDate + "T00:00:00");
    }
    return new Date();
}

// 두 날짜의 자정 기준 날짜차를 구합니다.
function getDaysBetween(date1, date2) {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diffTime = d2.getTime() - d1.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// 경과 일수 구하기 (가입 당일 = 1일 차)
function getDaysSinceSignup() {
    const signup = getSignupDate();
    const current = getCurrentDate();
    const diffDays = getDaysBetween(signup, current);
    return diffDays + 1; // 당일이 1일 차
}

// 날짜 포맷 YYYY-MM-DD
function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

// 5. Emotion Word Mapping (365 감정 매칭)
function getThemeEmotion(dayIndex) {
    // dayIndex는 1부터 시작하므로 0-indexed 배열에 맞춥니다.
    const idx = (dayIndex - 1) % EMOTION_WORDS.length;
    return EMOTION_WORDS[idx];
}

// 6. Init and Event Binding (초기화 및 이벤트 바인딩)
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    // Load active session
    const savedSession = localStorage.getItem('poet_session');
    if (savedSession) {
        state.currentUser = JSON.parse(savedSession);
    }

    // Set simulator default inputs
    const now = new Date();
    document.getElementById('sim-current-time').value = formatDateTimeLocal(now);
    
    if (state.currentUser) {
        document.getElementById('sim-signup-date').value = state.currentUser.signupDate;
    } else {
        document.getElementById('sim-signup-date').value = formatDate(now);
    }

    // Bind event listeners
    bindEvents();
    
    // Initial Render
    updateUI();
    lucide.createIcons();

    // Start auto midnight checker (자정 감지 루프)
    setInterval(checkMidnightTransition, 1000);
}

// datetime-local input 용 포맷팅 (YYYY-MM-DDTHH:MM)
function formatDateTimeLocal(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${hh}:${mm}`;
}

function bindEvents() {
    // Navigation Routing
    document.getElementById('btn-go-auth').addEventListener('click', () => navigateTo('auth-page'));
    document.getElementById('btn-back-landing').addEventListener('click', () => navigateTo('landing-page'));
    
    document.getElementById('btn-logout').addEventListener('click', logout);

    // Auth Form Tabs
    document.getElementById('tab-login').addEventListener('click', () => setAuthMode('login'));
    document.getElementById('tab-signup').addEventListener('click', () => setAuthMode('signup'));

    // Auth Submission
    document.getElementById('auth-form').addEventListener('submit', handleAuthSubmit);

    // Dashboard Tabs
    document.getElementById('nav-write').addEventListener('click', () => switchTab('write'));
    document.getElementById('nav-archive').addEventListener('click', () => switchTab('archive'));

    // Writing Controls (Auto-save trigger)
    document.getElementById('poem-title').addEventListener('input', triggerAutoSave);
    document.getElementById('poem-content').addEventListener('input', triggerAutoSave);
    document.getElementById('reply-poem-content').addEventListener('input', triggerReplyAutoSave);

    // Publishing Action
    document.getElementById('btn-publish-poem').addEventListener('click', publishPoem);
    document.getElementById('btn-publish-reply').addEventListener('click', publishReply);
    document.getElementById('btn-view-written').addEventListener('click', () => {
        // 이미 쓴 시 보기 모달 띄우기
        const todayStr = formatDate(getCurrentDate());
        const diaries = db.getDiaries();
        const todayPoem = diaries.find(d => d.username === state.currentUser.username && d.date === todayStr);
        if (todayPoem) {
            openPoemModal(todayPoem);
        }
    });

    // Modal Close
    document.getElementById('btn-close-modal').addEventListener('click', closeModal);
    document.getElementById('modal-viewer').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal-viewer')) closeModal();
    });

    // Simulator Widget Controls
    document.getElementById('btn-toggle-simulator').addEventListener('click', toggleSimulator);
    
    // Simulator input change
    document.getElementById('sim-current-time').addEventListener('change', handleSimulatorChange);
    document.getElementById('sim-signup-date').addEventListener('change', handleSimulatorChange);
    
    // Simulator Presets
    document.getElementById('btn-sim-now').addEventListener('click', () => {
        document.getElementById('sim-current-time').value = formatDateTimeLocal(new Date());
        handleSimulatorChange();
    });
    document.getElementById('btn-sim-midnight').addEventListener('click', () => {
        const d = getCurrentDate();
        d.setHours(23, 59, 50, 0);
        document.getElementById('sim-current-time').value = formatDateTimeLocal(d);
        handleSimulatorChange();
    });
    document.getElementById('btn-sim-tomorrow').addEventListener('click', () => {
        const d = getCurrentDate();
        d.setDate(d.getDate() + 1);
        document.getElementById('sim-current-time').value = formatDateTimeLocal(d);
        handleSimulatorChange();
    });
    
    document.getElementById('btn-sim-signup-today').addEventListener('click', () => {
        const curDate = formatDate(getCurrentDate());
        document.getElementById('sim-signup-date').value = curDate;
        handleSimulatorChange();
    });
    document.getElementById('btn-sim-signup-year1').addEventListener('click', () => {
        const d = getCurrentDate();
        d.setDate(d.getDate() - 30);
        document.getElementById('sim-signup-date').value = formatDate(d);
        handleSimulatorChange();
    });
    document.getElementById('btn-sim-signup-year2').addEventListener('click', () => {
        const d = getCurrentDate();
        d.setDate(d.getDate() - 365);
        document.getElementById('sim-signup-date').value = formatDate(d);
        handleSimulatorChange();
    });

    document.getElementById('btn-reset-simulator').addEventListener('click', () => {
        if(confirm("모든 로컬 데이터를 초기화하시겠습니까?")) {
            localStorage.clear();
            alert("초기화되었습니다. 페이지를 새로고침합니다.");
            window.location.reload();
        }
    });
}

// 7. Navigation Routing (페이지 전환)
function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // 탭 상태 초기화
    if (pageId === 'main-page') {
        switchTab('write');
    }
}

function setAuthMode(mode) {
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const signupOnlyEls = document.querySelectorAll('.signup-only');
    const submitBtn = document.getElementById('btn-auth-submit');
    const titleEl = document.getElementById('auth-title');
    const subtitleEl = document.getElementById('auth-subtitle');

    if (mode === 'login') {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        signupOnlyEls.forEach(el => el.classList.add('hidden'));
        submitBtn.textContent = '로그인';
        titleEl.textContent = '마음의 문을 열다';
        subtitleEl.textContent = '시를 쓰기 위해 로그인 또는 회원가입을 해주세요.';
    } else {
        tabLogin.classList.remove('active');
        tabSignup.classList.add('active');
        signupOnlyEls.forEach(el => el.classList.remove('hidden'));
        submitBtn.textContent = '회원가입';
        titleEl.textContent = '시인으로 등록하다';
        subtitleEl.textContent = '새로운 계정을 생성하고 필명을 정해 보세요.';
        
        // 가입 날짜 테스트 입력 인풋 기본값
        if(!document.getElementById('auth-signup-date').value) {
            document.getElementById('auth-signup-date').value = formatDate(getCurrentDate());
        }
    }
}

// 8. Auth logic (회원 인증 로직)
function handleAuthSubmit() {
    const username = document.getElementById('auth-username').value.trim();
    const password = document.getElementById('auth-password').value.trim();
    const isSignup = document.getElementById('tab-signup').classList.contains('active');
    
    if (!username || !password) {
        alert("필명과 비밀번호를 입력해주세요.");
        return;
    }

    const users = db.getUsers();
    
    if (isSignup) {
        // 회원가입
        if (users.some(u => u.username === username)) {
            alert("이미 존재하는 필명입니다.");
            return;
        }

        const dateVal = document.getElementById('auth-signup-date').value || formatDate(getCurrentDate());
        const newUser = {
            username,
            password,
            signupDate: dateVal
        };
        users.push(newUser);
        db.saveUsers(users);
        
        // 즉시 가상 가입일 동기화
        state.virtualSignupDate = dateVal;
        document.getElementById('sim-signup-date').value = dateVal;

        alert("시인 등록이 완료되었습니다. 로그인해 주세요.");
        setAuthMode('login');
    } else {
        // 로그인
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            alert("필명 또는 비밀번호가 일치하지 않습니다.");
            return;
        }
        
        state.currentUser = user;
        localStorage.setItem('poet_session', JSON.stringify(user));
        
        // 시뮬레이터 가입일 동기화
        state.virtualSignupDate = user.signupDate;
        document.getElementById('sim-signup-date').value = user.signupDate;

        navigateTo('main-page');
        updateUI();
    }
}

function logout() {
    state.currentUser = null;
    localStorage.removeItem('poet_session');
    
    // 시뮬레이터 가입일 초기화
    state.virtualSignupDate = null;
    
    // 입력 필드 클리어
    document.getElementById('auth-username').value = '';
    document.getElementById('auth-password').value = '';
    
    navigateTo('landing-page');
}

// 9. Dashboard Tab Navigation (탭 네비게이션)
function switchTab(tabName) {
    state.activeTab = tabName;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    if (tabName === 'write') {
        document.getElementById('nav-write').classList.add('active');
        document.getElementById('write-tab-content').classList.add('active');
        renderWriteTab();
    } else {
        document.getElementById('nav-archive').classList.add('active');
        document.getElementById('archive-tab-content').classList.add('active');
        renderArchiveTab();
    }
    
    lucide.createIcons();
}

// 10. Core Feature Stage 1 & 4: Rendering Write View (년차별 라우팅 및 렌더링)
function renderWriteTab() {
    if (!state.currentUser) return;

    const days = getDaysSinceSignup();
    const isYear2 = days >= 366; // 366일 이상부터 2년 차

    // 헤더 상태바 업데이트
    document.getElementById('display-name').textContent = state.currentUser.username;
    
    const tierBadge = document.getElementById('user-tier');
    if (isYear2) {
        const year = Math.floor((days - 1) / 365) + 1;
        tierBadge.textContent = `${year}년 차 시인`;
        tierBadge.style.borderColor = 'var(--color-gold)';
        tierBadge.style.color = 'var(--color-gold)';
    } else {
        tierBadge.textContent = `1년 차 시인`;
        tierBadge.style.borderColor = 'var(--color-accent)';
        tierBadge.style.color = 'var(--color-accent)';
    }

    if (isYear2) {
        // 2년 차: 듀얼 에디터 모드
        document.getElementById('single-editor-view').classList.remove('active');
        document.getElementById('dual-editor-view').classList.add('active');
        setupDualEditor();
    } else {
        // 1년 차: 단일 에디터 모드
        document.getElementById('single-editor-view').classList.add('active');
        document.getElementById('dual-editor-view').classList.remove('active');
        setupSingleEditor(days);
    }
}

// 1년 차 에디터 설정
function setupSingleEditor(days) {
    const todayStr = formatDate(getCurrentDate());
    const emotionWord = getThemeEmotion(days);
    
    document.getElementById('today-emotion-word').textContent = emotionWord;
    document.getElementById('days-count').textContent = days;
    
    // 기존에 오늘 이미 썼는지 체크
    const diaries = db.getDiaries();
    const todayPoem = diaries.find(d => d.username === state.currentUser.username && d.date === todayStr);
    
    const blocker = document.getElementById('written-blocker');
    const poemTitle = document.getElementById('poem-title');
    const poemContent = document.getElementById('poem-content');
    const saveStatus = document.getElementById('save-status-text');

    if (todayPoem) {
        // 오늘 글을 이미 발행했음 -> 차단막 활성화 및 입력 방지
        blocker.classList.remove('hidden');
        poemTitle.value = todayPoem.contentTitle || '';
        poemContent.value = todayPoem.content || '';
        poemTitle.disabled = true;
        poemContent.disabled = true;
        saveStatus.textContent = "오늘의 시가 발행되었습니다.";
    } else {
        // 오늘 글 안 씀 -> 에디터 리셋 및 복구 시도
        blocker.classList.add('hidden');
        poemTitle.disabled = false;
        poemContent.disabled = false;
        
        // 임시 저장 데이터 복구
        const temp = db.getTempSave(state.currentUser.username);
        // 오늘 작성 중이던 임시 저장본이고, 오늘 감정 단어와 일치하는 경우 복구
        if (temp && temp.date === todayStr && temp.daysSinceSignup === days) {
            poemTitle.value = temp.contentTitle || '';
            poemContent.value = temp.content || '';
            saveStatus.textContent = "작성 중이던 임시 저장본이 복구되었습니다.";
        } else {
            poemTitle.value = '';
            poemContent.value = '';
            saveStatus.textContent = "새로운 감정으로 시를 시작해 보세요.";
        }
    }
}

// 2년 차 듀얼 에디터 설정
function setupDualEditor() {
    const current = getCurrentDate();
    const todayStr = formatDate(current);
    const days = getDaysSinceSignup();
    
    // 1년 전 날짜 구하기 (365일 전)
    const pastDate = new Date(current);
    pastDate.setDate(pastDate.getDate() - 365);
    const pastDateStr = formatDate(pastDate);
    const pastDays = days - 365;

    // 365일 전 쓴 시 로드
    const diaries = db.getDiaries();
    const pastPoem = diaries.find(d => d.username === state.currentUser.username && d.date === pastDateStr);

    // 과거 시 정보 바인딩
    document.getElementById('past-date').textContent = pastDateStr.replace(/-/g, '. ');
    
    const pastEmotion = getThemeEmotion(pastDays);
    document.getElementById('past-emotion').textContent = pastEmotion;

    const pastTitleEl = document.getElementById('past-poem-title');
    const pastContentEl = document.getElementById('past-poem-content');

    if (pastPoem) {
        pastTitleEl.textContent = pastPoem.contentTitle;
        pastContentEl.textContent = pastPoem.content;
    } else {
        // 1년 전에 안 썼다면 감성적 텍스트로 보완
        pastTitleEl.textContent = `[ 침묵의 하루 ]`;
        pastContentEl.textContent = `1년 전 오늘의 나는 기록을 채워두지 않았습니다.\n\n빈 공간을 바라보며 오늘의 마음을 들려주세요.`;
    }

    // 오늘의 답시 영역 바인딩
    document.getElementById('present-date').textContent = todayStr.replace(/-/g, '. ');
    
    const replyBlocker = document.getElementById('reply-written-blocker');
    const replyTextarea = document.getElementById('reply-poem-content');
    const replySaveStatus = document.getElementById('reply-save-status-text');

    // 오늘 답시를 이미 썼는지 확인 (pastPoem에 답시가 있는지, 또는 오늘 쓴 답시 데이터가 별도로 매핑되었는지)
    // 과거 데이터가 있고, 거기에 replyContent가 이미 발행되었는지 확인
    const todayReplyPoem = diaries.find(d => d.username === state.currentUser.username && d.date === todayStr);

    if (todayReplyPoem || (pastPoem && pastPoem.replyContent)) {
        // 이미 썼음
        replyBlocker.classList.remove('hidden');
        replyTextarea.value = todayReplyPoem ? todayReplyPoem.content : (pastPoem ? pastPoem.replyContent : '');
        replyTextarea.disabled = true;
        replySaveStatus.textContent = "오늘의 답시가 발행되었습니다.";
    } else {
        // 안 썼음
        replyBlocker.classList.add('hidden');
        replyTextarea.disabled = false;
        
        // 임시 저장 복구 시도
        const temp = db.getTempSave(state.currentUser.username);
        if (temp && temp.date === todayStr && temp.isReply) {
            replyTextarea.value = temp.content || '';
            replySaveStatus.textContent = "작성 중이던 답시 임시 저장본이 복구되었습니다.";
        } else {
            replyTextarea.value = '';
            replySaveStatus.textContent = "과거의 나에게 답을 건네어 보세요.";
        }
    }
}

// 11. Core Feature Stage 2: Auto-save & Debounce (자동 저장 로직)
function triggerAutoSave() {
    const saveSpinner = document.getElementById('save-spinner');
    const saveStatus = document.getElementById('save-status-text');
    
    saveSpinner.classList.remove('hidden');
    saveStatus.textContent = "저장 중...";

    clearTimeout(state.autoSaveTimer);
    state.autoSaveTimer = setTimeout(() => {
        performAutoSave();
    }, 3000);
}

function performAutoSave() {
    if (!state.currentUser) return;

    const days = getDaysSinceSignup();
    const todayStr = formatDate(getCurrentDate());
    const titleVal = document.getElementById('poem-title').value;
    const contentVal = document.getElementById('poem-content').value;
    
    const tempObj = {
        username: state.currentUser.username,
        date: todayStr,
        daysSinceSignup: days,
        contentTitle: titleVal,
        content: contentVal,
        isReply: false,
        savedAt: new Date().toISOString()
    };

    db.saveTempSave(state.currentUser.username, tempObj);

    const saveSpinner = document.getElementById('save-spinner');
    const saveStatus = document.getElementById('save-status-text');
    saveSpinner.classList.add('hidden');
    
    const time = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    saveStatus.textContent = `임시 저장되었습니다 (${time})`;
}

// 답시 에디터용 자동 저장
function triggerReplyAutoSave() {
    const saveSpinner = document.getElementById('reply-save-spinner');
    const saveStatus = document.getElementById('reply-save-status-text');
    
    saveSpinner.classList.remove('hidden');
    saveStatus.textContent = "저장 중...";

    clearTimeout(state.autoSaveTimer);
    state.autoSaveTimer = setTimeout(() => {
        performReplyAutoSave();
    }, 3000);
}

function performReplyAutoSave() {
    if (!state.currentUser) return;

    const todayStr = formatDate(getCurrentDate());
    const contentVal = document.getElementById('reply-poem-content').value;
    
    const tempObj = {
        username: state.currentUser.username,
        date: todayStr,
        content: contentVal,
        isReply: true,
        savedAt: new Date().toISOString()
    };

    db.saveTempSave(state.currentUser.username, tempObj);

    const saveSpinner = document.getElementById('reply-save-spinner');
    const saveStatus = document.getElementById('reply-save-status-text');
    saveSpinner.classList.add('hidden');
    
    const time = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    saveStatus.textContent = `임시 저장되었습니다 (${time})`;
}

// 12. Core Feature: Publish Poem (시 최종 발행)
function publishPoem() {
    const titleVal = document.getElementById('poem-title').value.trim();
    const contentVal = document.getElementById('poem-content').value.trim();
    
    if (!titleVal || !contentVal) {
        alert("제목과 시 내용을 입력해 주세요.");
        return;
    }

    const current = getCurrentDate();
    const todayStr = formatDate(current);
    const days = getDaysSinceSignup();
    const diaries = db.getDiaries();

    // 1일 1회 체크 재검증
    const todayPoemIdx = diaries.findIndex(d => d.username === state.currentUser.username && d.date === todayStr);
    if (todayPoemIdx >= 0) {
        alert("오늘의 시를 이미 발행하셨습니다.");
        return;
    }

    const newPoem = {
        username: state.currentUser.username,
        date: todayStr,
        daysSinceSignup: days,
        emotion: getThemeEmotion(days),
        contentTitle: titleVal,
        content: contentVal,
        replyContent: "", // 아직 답시 없음
        savedAt: new Date().toISOString()
    };

    diaries.push(newPoem);
    db.saveDiaries(diaries);
    
    // 임시 저장 삭제
    db.clearTempSave(state.currentUser.username);
    
    alert("오늘의 시가 우주에 발행되었습니다.\n밤 12시가 지나면 1년 간 봉인됩니다.");
    renderWriteTab();
}

// 2년 차 답시 발행
function publishReply() {
    const replyVal = document.getElementById('reply-poem-content').value.trim();
    
    if (!replyVal) {
        alert("답시 내용을 적어 주세요.");
        return;
    }

    const current = getCurrentDate();
    const todayStr = formatDate(current);
    const diaries = db.getDiaries();
    
    // 365일 전의 일기에 답시 매핑하기
    const pastDate = new Date(current);
    pastDate.setDate(pastDate.getDate() - 365);
    const pastDateStr = formatDate(pastDate);

    // 1. 1년 전 오늘의 원본 일기를 찾아서 replyContent 업데이트
    const pastPoemIdx = diaries.findIndex(d => d.username === state.currentUser.username && d.date === pastDateStr);
    
    if (pastPoemIdx >= 0) {
        diaries[pastPoemIdx].replyContent = replyVal;
    }

    // 2. 답시 자체도 오늘의 독립적인 일기로서 저장 (2년 차의 일일 글쓰기 완료 처리 목적)
    const days = getDaysSinceSignup();
    const newReplyPoem = {
        username: state.currentUser.username,
        date: todayStr,
        daysSinceSignup: days,
        emotion: "답시", // 오늘의 특별 주제는 답시
        contentTitle: `1년 전 나에게 보내는 답신`,
        content: replyVal,
        replyContent: "", // 답시에 대한 답시는 없음
        savedAt: new Date().toISOString(),
        isReplyPoem: true
    };
    
    diaries.push(newReplyPoem);
    db.saveDiaries(diaries);
    
    // 임시 저장 삭제
    db.clearTempSave(state.currentUser.username);
    
    alert("1년 전 나에게 답시를 무사히 전달하였습니다.");
    renderWriteTab();
}

// 13. Core Feature Stage 3: Archive View & Lock State (아카이브와 당일 열람 제한)
function renderArchiveTab() {
    if (!state.currentUser) return;
    
    const archiveList = document.getElementById('archive-list');
    archiveList.innerHTML = '';
    
    const diaries = db.getDiaries();
    // 현재 유저의 글 필터링 및 최신순 정렬
    const myDiaries = diaries
        .filter(d => d.username === state.currentUser.username)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
        
    if (myDiaries.length === 0) {
        archiveList.innerHTML = `
            <div class="empty-archive">
                <i data-lucide="book" class="empty-icon"></i>
                <p>아직 작성된 시가 없습니다. 오늘의 시를 먼저 써보세요.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    const todayStr = formatDate(getCurrentDate());
    const days = getDaysSinceSignup();

    myDiaries.forEach(diary => {
        // 날짜 제약 체크
        // 1. 작성 당일 (오늘)인 글은 열람 가능 (locked = false)
        // 2. 2년 차 이상이 되었을 때, 가입일 경과 기준으로 정확히 365일 전인 글은 열람 가능 (locked = false)
        // 3. 그 외 과거 글은 당일 열람 제한 규칙에 의해 잠금 (locked = true)
        
        const isToday = (diary.date === todayStr);
        
        // 365일 전 글인지 체크
        const diaryDate = new Date(diary.date + "T00:00:00");
        const curDate = new Date(todayStr + "T00:00:00");
        const diffDays = getDaysBetween(diaryDate, curDate);
        const isUnlockedPast = (diffDays === 365);
        const hasReply = !!diary.replyContent;

        const isLocked = !isToday && !isUnlockedPast;

        const card = document.createElement('div');
        card.className = 'archive-card glass-card';
        card.addEventListener('click', () => {
            handleCardClick(diary, isLocked);
        });

        // 카드 내부 마크업
        let bodyHtml = '';
        let statusBadgeHtml = '';

        if (isLocked) {
            bodyHtml = `
                <div class="card-lock-state">
                    <i data-lucide="lock"></i>
                    <span class="card-lock-label">봉인됨</span>
                </div>
            `;
            statusBadgeHtml = `<span class="status-badge locked"><i data-lucide="lock" style="width:12px;height:12px;"></i> 봉인됨</span>`;
        } else {
            bodyHtml = `
                <h4 class="card-title">${diary.contentTitle}</h4>
            `;
            if (isToday) {
                statusBadgeHtml = `<span class="status-badge open"><i data-lucide="unlock" style="width:12px;height:12px;"></i> 당일 열람 가능</span>`;
            } else {
                statusBadgeHtml = `<span class="status-badge reply-done"><i data-lucide="message-square" style="width:12px;height:12px;"></i> 봉인 해제됨</span>`;
            }
        }

        // 1년 차 대비 2년 차 상태 표기
        const displayDay = diary.daysSinceSignup ? `${diary.daysSinceSignup}일 차` : `${getDaysBetween(getSignupDate(), new Date(diary.date)) + 1}일 차`;

        card.innerHTML = `
            <div class="card-header">
                <span class="card-date">${diary.date.replace(/-/g, '. ')}</span>
                <span class="card-theme">${diary.emotion}</span>
            </div>
            <div class="card-body">
                ${bodyHtml}
            </div>
            <div class="card-footer">
                <span>${displayDay}</span>
                ${statusBadgeHtml}
            </div>
        `;

        archiveList.appendChild(card);
    });

    lucide.createIcons();
}

// 아카이브 카드 클릭 시 모달 처리
function handleCardClick(diary, isLocked) {
    const modal = document.getElementById('modal-viewer');
    const lockIndicator = document.getElementById('modal-lock-indicator');
    const poemContent = document.getElementById('modal-poem-content');
    const modalTag = document.getElementById('modal-tag');
    const modalDate = document.getElementById('modal-date');
    const modalTitle = document.getElementById('modal-poem-title');
    const modalBody = document.getElementById('modal-poem-body');
    const modalDivider = document.getElementById('modal-divider');
    const replySection = document.getElementById('modal-reply-section');
    const replyBody = document.getElementById('modal-reply-body-text');

    modalDate.textContent = diary.date.replace(/-/g, '. ');
    modalTag.textContent = `${diary.emotion} (${diary.daysSinceSignup || 1}일 차)`;

    if (isLocked) {
        // 잠겨있음
        lockIndicator.classList.remove('hidden');
        poemContent.classList.add('hidden');

        // 봉인 해제 예정일자 계산 (작성일 + 365일)
        const writeDate = new Date(diary.date + "T00:00:00");
        const unlockDate = new Date(writeDate);
        unlockDate.setDate(writeDate.getDate() + 365);
        document.getElementById('modal-unlock-date').textContent = formatDate(unlockDate).replace(/-/g, '. ');

        // 남은 디데이 카운트다운 계산
        const today = new Date(formatDate(getCurrentDate()) + "T00:00:00");
        const diff = getDaysBetween(today, unlockDate);
        
        const countdownVal = document.getElementById('modal-countdown');
        if (diff > 0) {
            countdownVal.textContent = `${diff}일`;
        } else {
            countdownVal.textContent = `오늘 봉인 해제`;
        }

    } else {
        // 열려있음
        lockIndicator.classList.add('hidden');
        poemContent.classList.remove('hidden');

        modalTitle.textContent = diary.contentTitle;
        modalBody.textContent = diary.content;

        // 답시 내용이 있는지 확인하여 듀얼 렌더링
        if (diary.replyContent) {
            modalDivider.classList.remove('hidden');
            replySection.classList.remove('hidden');
            replyBody.textContent = diary.replyContent;
        } else {
            modalDivider.classList.add('hidden');
            replySection.classList.add('hidden');
            replyBody.textContent = '';
        }
    }

    modal.classList.add('active');
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('modal-viewer').classList.remove('active');
}

// 14. Midnight Checker (실시간 자정 검사 타이머)
// 10초에 한 번 혹은 1초에 한 번씩 시스템 시간 경과를 감지하여 
// 자정이 도래하면 에디터 상태를 리렌더링해 자동 보호합니다.
let lastCheckedDate = null;
function checkMidnightTransition() {
    const current = getCurrentDate();
    const dateStr = formatDate(current);
    
    if (lastCheckedDate === null) {
        lastCheckedDate = dateStr;
        return;
    }

    if (lastCheckedDate !== dateStr) {
        lastCheckedDate = dateStr;
        console.log("자정이 지나 날짜가 변경되었습니다. 화면을 자동 업데이트합니다.");
        
        // 작성 중이던 자동 저장이 유실되지 않도록 바로 자동저장 커밋
        if (state.currentUser && state.activeTab === 'write') {
            performAutoSave();
        }
        
        updateUI();
    }
}

// 15. Simulator logic (개발용 시뮬레이터 구동)
function toggleSimulator() {
    const widget = document.getElementById('simulator-widget');
    if (widget.classList.contains('simulator-closed')) {
        widget.classList.remove('simulator-closed');
        widget.classList.add('simulator-open');
    } else {
        widget.classList.remove('simulator-open');
        widget.classList.add('simulator-closed');
    }
}

function handleSimulatorChange() {
    const timeVal = document.getElementById('sim-current-time').value;
    const signupVal = document.getElementById('sim-signup-date').value;

    if (timeVal) {
        state.virtualTime = new Date(timeVal);
    } else {
        state.virtualTime = null;
    }

    if (signupVal) {
        state.virtualSignupDate = signupVal;
    } else {
        state.virtualSignupDate = null;
    }

    updateUI();
}

// 시뮬레이터 상단 디버그 텍스트 업데이트 및 UI 갱신
function updateUI() {
    const curTimeObj = getCurrentDate();
    const signupDateObj = getSignupDate();
    const daysSince = getDaysSinceSignup();
    
    // 시뮬레이터 패널 값 렌더
    document.getElementById('sim-val-now').textContent = formatDateTimeLocal(curTimeObj).replace('T', ' ');
    document.getElementById('sim-val-signup').textContent = formatDate(signupDateObj);
    document.getElementById('sim-val-days').textContent = daysSince;
    document.getElementById('sim-val-tier').textContent = daysSince >= 366 ? '2년 차 이상' : '1년 차';

    // 로그인 정보 유지 여부에 따른 라우팅
    const userSession = localStorage.getItem('poet_session');
    
    if (userSession) {
        state.currentUser = JSON.parse(userSession);
        navigateTo('main-page');
        
        // 현재 탭 렌더
        if (state.activeTab === 'write') {
            renderWriteTab();
        } else {
            renderArchiveTab();
        }
    } else {
        navigateTo('landing-page');
    }
}
