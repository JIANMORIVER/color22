// 多语言配置
const i18n = {
    zh: {
        informationSeg: '基本信息',
        task1Seg: '实验一',
        task2Seg: '实验二',

        languageSelect: '选择语言',
        title: '情绪色彩调研',
        // Group Selection
        groupSelect: '请选择您所在的组',
        groupCN: '中国 (China)',
        groupUK: '英国 (UK)',
        groupUS: '美国 (US)',
        groupBW: '博茨瓦纳 (Botswana)',

        // Consent
        consentTitle: '知情同意书',
        consentContent: `尊敬的参与者：<br><br>您好！欢迎参加本次关于色彩感知与偏好的线上研究。在您决定是否参与之前，请仔细阅读以下内容。本研究的目的是探究人们在数字环境下对色彩的视觉感知差异。<br><br><b>1. 研究流程与实验环境要求</b><br>本实验全程在网页端完成，预计耗时约 5-10 分钟。您需要根据屏幕上的提示，完成一系列色彩匹配、偏好选择或辨识任务。<br><br><b>2. 潜在风险与不适</b><br>本研究无已知生理风险，但长时间注视屏幕可能引起视觉疲劳，建议适时休息。<br><br><b>3. 隐私与数据保密</b><br>匿名性： 本实验不收集您的姓名、IP 地址等可直接识别身份的信息，仅以随机编号记录。<br>数据用途： 您的色彩选择数据仅用于学术研究/产品改进，不会用于其他商业目的。<br>数据存储： 数据将加密存储，仅研究团队成员可访问。<br><br><b>知情同意声明：</b><br>我已知晓并理解上述内容。我明白我可以随时退出实验。我同意我的匿名数据用于本次研究分析，并承诺将按照要求调整环境和设备后开始实验。`,
        consentCheck: '我已知晓并同意参与本实验并开始测试',

        // Instructions
        instructionsTitle: '实验注意事项',
        instructionsContent: `<b>1. 【环境光线】</b><br>请确保房间尽可能黑暗：关闭所有灯光，拉上窗帘，避免任何环境光直射屏幕或造成反光。这样能排除外界光线对色彩判断的干扰，让您看到的颜色完全来自屏幕本身。<br><br><b>2. 【屏幕显示设置】</b><br>必须关闭设备的“护眼模式”、“夜间模式”、“原彩显示”、“蓝光过滤”等功能（通常可在设置或快捷开关中找到）。这些功能会改变屏幕色温，导致颜色失真。将屏幕亮度调整至中等水平（建议 50%～70%），避免过亮或过暗。<br><br><b>3. 【全屏显示】</b><br>请点击下方的“防干扰网页全屏”按钮，确保实验界面完全占据屏幕，避免任务栏、书签栏等元素的干扰。<br><br><b>4. 【视觉适应】</b><br>在开始任务前，请先注视屏幕中央的灰色区域约 30 秒，让眼睛适应当前的屏幕亮度和色彩环境。<br><br><b>5. 【操作原则】</b><br>凭第一直觉快速作答，每个问题思考时间不要超过 5 秒。色彩感知没有对错，我们只需要您最真实的感受。请一次性完成实验，尽量避免中途中断（如确需中断，实验进度可能无法保存）。`,
        enterFullScreen: '防干扰网页全屏',

        // Color Blindness
        cbTitle: '视觉测试',
        cbDesc: '请辨认下图中的数字，并在输入框中填写。',
        cbError: '非常抱歉，根据测试结果，我们暂时无法邀请您继续参与本实验。感谢您的关注！',
        cbPlaceholder: '输入数字',

        // User Info (New)
        userInfo: '基本信息',
        infoDesc: '请填写以下信息。',
        detectedInfo: '检测到的设备信息',
        monitorModel: '显示器型号 (例如: Dell U2419H, MacBook Pro 14)',
        monitorPlaceholder: '如果知道，请填写您的显示设备型号',
        birthYear: '出生年份',
        birthMonth: '出生月份',
        nationality: '国籍',
        residence: '现居住国家',
        residenceDuration: '在现居地居住时长 (年)',
        nativeLang: '母语',
        speaksEnglish: '您是否能熟练使用英语？',
        isDesigner: '是否从事艺术/设计相关行业？',
        hasColorBlindness: '您是否有色觉障碍（色盲或色弱等）？',
        yes: '是',
        no: '否',
        gender: '性别',
        male: '男',
        female: '女',
        other: '其他',
        select: '请选择',

        // Common
        start: '下一步',
        next: '下一步',
        back: '上一步',
        submit: '提交结果',
        submitting: '正在提交...',
        thankYou: '🎉 感谢您的参与！',
        thankYouDesc: '您的选择已成功记录。',
        home: '返回首页',

        // Errors
        errorRequired: '请填写此项',
        errorAge: '请输入有效的年份',
        errorConsent: '请勾选同意选项',
        errorSubmit: '提交失败，请重试',
        errorNetwork: '网络错误',
        fullScreenEnter: '全屏显示',
        fullScreenExit: '退出全屏',

        // Phase 1 Tutorial
        phase1TutorialTitle: '第一阶段操作教程',
        phase1TutorialDesc1: '在接下来的实验中，您将需要选取代表不同情绪的颜色。',
        phase1TutorialDesc2: '操作顺序非常重要：',
        phase1TutorialStep1: '1. 首先，请左右滑动**色相条 (Hue)**，设定色彩的基本倾向 (例如红、蓝、绿等)。',
        phase1TutorialStep2: '2. 滑动后，下方的**调色板**将会出现。',
        phase1TutorialStep3: '3. 在调色板上点击或拖动圆圈，精确定位最符合心目中该情绪的颜色。颜色效果会显示在顶部的圆形中。',
        phase1TutorialUnderstood: '我已了解，开始实验',

        // Color Picker
        hue: '色相 (Hue)',
        sat: '饱和度 (Saturation)',
        light: '亮度 (Lightness)',
        hueHint: '请滑动色相条',
        emotions: {
            '感兴趣': '感兴趣', '欢愉': '欢愉', '自豪': '自豪', '欢乐': '欢乐', '愉快': '愉快',
            '满足': '满足', '赞赏': '赞赏', '爱': '爱', '如释重负': '如释重负', '同情': '同情',
            '悲伤': '悲伤', '内疚': '内疚', '后悔': '后悔', '羞愧': '羞愧', '失望': '失望',
            '恐惧': '恐惧', '厌恶': '厌恶', '轻视': '轻视', '憎恨': '憎恨', '忿怒': '忿怒'
        },
        emotionInstruction: (emotion) => `请先滑动下方色相条设定主色，然后在下方调色板中点选最能代表“${emotion}”的颜色。`,

        // GEW Experiment
        phase2Title: '第二阶段：词汇联想 (操作教程)',
        phase2Desc: '在接下来的实验中，您将看到一系列表示颜色的词汇。请使用“日内瓦情绪轮”选出您认为该颜色最能代表的情绪。',
        phase2Note: '点击情绪轮上的圆圈以表示情绪强度。圆圈越小代表情绪越弱，越大靠近外围代表情绪越强。您还可以选择“没有情绪”或填入“其他情绪”。',
        phase2NoteExample: '示例：点击图中最大的圆表示“极其强烈的该情绪”。您可以选择同一个颜色的多个情绪组合。',
        phase2InteractiveTutorial: '操作演练：小明看到某词汇时感觉到强烈的悲伤和中度的后悔，但他现在错填成了强烈的欢乐(Joy)。<br><br>请使用下方的测试情绪轮：<br>1. 点击取消错误的“欢乐”<br>2. 选择最外环(第5圈)的“悲伤”与中间环(第3圈)的“后悔”。<br><br>正确完成后方可通过并开始实验。',
        phase2TutorialError: '操作步骤尚未完成！请确保取消了“欢乐”，并选中了最外环的“悲伤”和中间(第3个圈)的“后悔”。',
        gewStart: '开始第二阶段',
        gewNext: '下一个',
        gewSubmit: '提交所有结果',
        gewInstruction: (colorBlock) => `当您看到 ${colorBlock} 时，您会联想到什么情绪？`,
        gewEmotions: {
            'interest': '感兴趣', 'amusement': '欢愉', 'pride': '自豪', 'joy': '欢乐', 'pleasure': '愉快',
            'contentment': '满足', 'love': '爱', 'admiration': '赞赏', 'relief': '如释重负', 'compassion': '同情',
            'sadness': '悲伤', 'guilt': '内疚', 'regret': '后悔', 'shame': '羞愧', 'disappointment': '失望',
            'fear': '恐惧', 'disgust': '厌恶', 'contempt': '轻视', 'hate': '憎恨', 'anger': '忿怒'
        },
        gewWords: {
            'Red': '红色', 'Orange': '橙色', 'Yellow': '黄色', 'Green': '绿色', 'Blue': '蓝色',
            'Lilac': '浅紫', 'Purple': '紫色', 'Pink': '粉色', 'Brown': '棕色', 'White': '白色',
            'Grey': '灰色', 'Black': '黑色', 'Light Blue': '浅蓝'
        },
        // GEW Design
        noEmotion: '没有情绪',
        differentEmotion: '其他情绪',
        enterEmotion: '请输入情绪名称'
    },
    en: {
        informationSeg: 'Information',
        task1Seg: 'Task1',
        task2Seg: 'Task2',
        
        languageSelect: 'Select Language',
        title: 'Color Emotion Survey',
        // Group Selection
        groupSelect: 'Select Your Group',
        groupCN: 'China',
        groupUK: 'UK',
        groupUS: 'US',
        groupBW: 'Botswana',

        // Consent
        consentTitle: 'Informed Consent',
        consentContent: `Hello! You are sincerely invited to participate in a color science research.<br><br>This study explores how people from different cultural backgrounds associate colors and emotions, and how AI systems interpret these associations. The ultimate goal is to build a more inclusive database for color psychology and to improve AI's ability to generate culturally appropriate emotion-color associations.<br><br>The experiment only takes about 10 minutes.<br><br><b>1. Participation Requirements</b><br>age 18-60; Long-term residence in the country (more than 2 years); No color blindness or color weakness<br><br><b>2. Screen Settings</b><br>To ensure accurate color display:<br>Disable Night Mode / Eye Comfort / Blue Light Filter. Set screen brightness to medium level (about 50-70%).<br><br><b>3. Privacy & Data Use</b><br>This study does NOT collect identifying information such as your name or IP address.<br>Data will be used only for academic research and stored securely by the research team.<br><br><b>4. Voluntary Participation</b><br>Your participation is completely voluntary.<br>You may stop the experiment at any time without any consequence.`,
        consentCheck: 'I have read and agree to participate in this study and start the test',

        // Instructions
        instructionsTitle: 'Experiment Instructions',
        instructionsContent: `<b>1. [Ambient Lighting]</b><br>Please ensure the room is as dark as possible: turn off all lights, close the curtains, and avoid any direct ambient light on the screen or reflections. This removes interference from external light and ensures the colors you see come entirely from the screen itself.<br><br><b>2. [Screen Settings]</b><br>You MUST disable features like "Eye Comfort", "Night Mode", "True Tone", and "Blue Light Filter" (usually found in settings or quick toggles). These alter screen color temperature and distort colors. Set screen brightness to a medium level (50%-70% recommended) to avoid overly bright or dark displays.<br><br><b>3. [Full Screen Display]</b><br>Please click the "Enter Full Screen" button below to ensure the experiment interface occupies the entire screen and avoid distractions from taskbars or bookmarks.<br><br><b>4. [Visual Adaptation]</b><br>Before starting the tasks, stare at the gray area in the center of the screen for about 30 seconds to allow your eyes to adapt to the current screen brightness and color environment.<br><br><b>5. [Operational Principles]</b><br>Please answer quickly based on your first instinct without spending more than 5 seconds per question. There are no right or wrong answers in color perception; we only want your true feelings. Please complete the experiment in one sitting and avoid interruptions.`,
        enterFullScreen: 'Enter Full Screen',

        // Color Blindness
        cbTitle: 'Vision Test',
        cbDesc: 'Please identify the number in the image below.',
        cbError: 'Based on the test result, we are unable to proceed with the survey. Thank you for your interest.',
        cbPlaceholder: 'Enter number',

        // User Info (New)
        userInfo: 'Basic Information',
        infoDesc: 'Please fill in the following details.',
        detectedInfo: 'Detected Device Info',
        monitorModel: 'Monitor Model (e.g., Dell U2419H, MacBook Pro 14)',
        monitorPlaceholder: 'Please enter your display model if known',
        birthYear: 'Year of Birth',
        birthMonth: 'Month of Birth',
        nationality: 'Nationality',
        residence: 'Country of Residence',
        residenceDuration: 'Years in Residence',
        nativeLang: 'Native Language',
        speaksEnglish: 'Are you proficient in English?',
        isDesigner: 'Do you work in Art/Design?',
        hasColorBlindness: 'Do you have color vision deficiency (color blindness, color weakness, etc.)?',
        yes: 'Yes',
        no: 'No',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other',
        select: 'Select',

        // Common
        start: 'Next',
        next: 'Next',
        back: 'Back',
        submit: 'Submit',
        submitting: 'Submitting...',
        thankYou: '🎉 Thank you!',
        thankYouDesc: 'Your response has been recorded.',
        home: 'Back to Home',

        // Errors
        errorRequired: 'Required',
        errorAge: 'Invalid year',
        errorConsent: 'Please verify consent',
        errorSubmit: 'Submission failed',
        errorNetwork: 'Network error',
        fullScreenEnter: 'Fullscreen',
        fullScreenExit: 'Exit Fullscreen',

        // Phase 1 Tutorial
        phase1TutorialTitle: 'Phase 1: Operation Tutorial',
        phase1TutorialDesc1: 'In the following section, you will choose colors that best represent different emotions.',
        phase1TutorialDesc2: 'Please follow these steps:',
        phase1TutorialStep1: 'Move the color slider left or right to choose a base color (for example red, blue, or green).',
        phase1TutorialStep2: 'After selecting a color, a color panel will appear below.',
        phase1TutorialStep3: 'Click or drag your cursor on the panel to choose the exact shade you want.<br><br>The color you select will appear in the circle preview above.',
        phase1TutorialUnderstood: 'Understood, Start Phase 1',

        // Color Picker
        hue: 'Hue',
        sat: 'Saturation',
        light: 'Lightness',
        hueHint: 'Please slide the hue bar first',
        emotions: {
            '感兴趣': 'Interest', '欢愉': 'Amusement', '自豪': 'Pride', '欢乐': 'Joy', '愉快': 'Pleasure',
            '满足': 'Contentment', '赞赏': 'Admiration', '爱': 'Love', '如释重负': 'Relief', '同情': 'Compassion',
            '悲伤': 'Sadness', '内疚': 'Guilt', '后悔': 'Regret', '羞愧': 'Shame', '失望': 'Disappointment',
            '恐惧': 'Fear', '厌恶': 'Disgust', '轻视': 'Contempt', '憎恨': 'Hate', '忿怒': 'Anger'
        },
        emotionInstruction: (emotion) => `Please slide the hue bar to set the main color, then pick the exact color in the palette that best represents "${emotion}".`,

        // GEW Experiment
        phase2Title: 'Phase 2: Color–Emotion Association',
        phase2Desc: 'In this phase, you will be shown a color.<br>Select the emotion(s) that best match how the color makes you feel. <b>You may choose more than one emotion.</b>',
        phase2Note: '', // Unused in new layout
        phase2NoteExample: 'Example: If the color feels strongly joyful, select an outer circle near Joy. You may also select additional emotions if they apply.',
        phase2InteractiveTutorial: '',
        phase2TutorialError: '',
        gewStart: 'Start Phase 2',
        gewNext: 'Next',
        gewSubmit: 'Submit All Results',
        gewInstruction: (colorBlock) => `What emotion(s) do you associate with ${colorBlock}?`,
        gewEmotions: {
            'interest': 'Interest', 'amusement': 'Amusement', 'pride': 'Pride', 'joy': 'Joy', 'pleasure': 'Pleasure',
            'contentment': 'Contentment', 'love': 'Love', 'admiration': 'Admiration', 'relief': 'Relief', 'compassion': 'Compassion',
            'sadness': 'Sadness', 'guilt': 'Guilt', 'regret': 'Regret', 'shame': 'Shame', 'disappointment': 'Disappointment',
            'fear': 'Fear', 'disgust': 'Disgust', 'contempt': 'Contempt', 'hate': 'Hate', 'anger': 'Anger'
        },
        gewWords: {
            'Red': 'Red', 'Orange': 'Orange', 'Yellow': 'Yellow', 'Green': 'Green', 'Blue': 'Blue',
            'Lilac': 'Lilac', 'Purple': 'Purple', 'Pink': 'Pink', 'Brown': 'Brown', 'White': 'White',
            'Grey': 'Grey', 'Black': 'Black', 'Light Blue': 'Light Blue'
        },
        // GEW Design
        noEmotion: 'No emotion',
        differentEmotion: 'Different emotion',
        enterEmotion: 'Please specify emotion'
    }
};

const EMOTION_KEYS = [
    '感兴趣', '欢愉', '自豪', '欢乐', '愉快',
    '满足', '赞赏', '爱', '如释重负', '同情',
    '悲伤', '内疚', '后悔', '羞愧', '失望',
    '恐惧', '厌恶', '轻视', '憎恨', '忿怒'
];
// GEW Constants: Standard 20 Order
// Top-Right: Int...Pleasure
// Bottom-Right: Contentment...Compassion
// Bottom-Left: Sadness...Disappointment
// Top-Left: Fear...Anger
const GEW_EMOTION_KEYS = [
    'interest', 'amusement', 'pride', 'joy', 'pleasure',
    'contentment', 'love', 'admiration', 'relief', 'compassion',
    'sadness', 'guilt', 'regret', 'shame', 'disappointment',
    'fear', 'disgust', 'contempt', 'hate', 'anger'
];
const WORD_KEYS = [
    'J0', 'A0', 'G3', 'F17', 'C9',
    'F29', 'I6', 'H35', 'D38', 'F4', 'F0'
];

// Assuming GEW_COLORS refers to the words used in the GEW experiment, which is WORD_KEYS
const GEW_COLORS = WORD_KEYS;

const WORD_COLORS = {
    'J0':  'rgb(38, 38, 38)',      // Near Black
    'A0':  'rgb(242, 242, 242)',   // Near White
    'G3':  'rgb(187, 31, 35)',     // Red
    'F17': 'rgb(0, 144, 74)',      // Green
    'C9':  'rgb(255, 188, 0)',     // Yellow
    'F29': 'rgb(0, 127, 211)',     // Blue
    'I6':  'rgb(75, 40, 25)',      // Dark Brown
    'H35': 'rgb(111, 42, 120)',    // Purple
    'D38': 'rgb(243, 142, 187)',   // Pink
    'F4':  'rgb(221, 66, 0)',      // Orange
    'F0':  'rgb(128, 128, 128)',   // Grey
};

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let currentStep = -4; // -4: Group, -3: Consent, -2: Instructions, -1: ColorBlind, 0: Info, 1+: Survey
let userInfo = {};
let colorData = {};
let currentLang = 'en';
let startTime = 0;
let hasHueInteracted = false;
let currentGroup = '';
let displayInfo = {};
let isColorBlind = false;

let randomizedEmotionKeys = [];
let randomizedWordKeys = [];

// Collect display info on load
const getDisplayInfo = () => {
    // Detect Color Gamut
    let gamut = 'srgb';
    if (window.matchMedia('(color-gamut: rec2020)').matches) gamut = 'rec2020';
    else if (window.matchMedia('(color-gamut: p3)').matches) gamut = 'p3';

    // Detect Touch
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
        colorGamut: gamut,
        touchSupport: touchSupport,
        userAgent: navigator.userAgent
    };
};
displayInfo = getDisplayInfo();

// Constants
const COUNTRIES = [
    { value: 'CN', label: 'China 中国' },
    { value: 'US', label: 'United States 美国' },
    { value: 'GB', label: 'United Kingdom 英国' },
    { value: 'BW', label: 'Botswana 博茨瓦纳' },
    { value: 'AF', label: 'Afghanistan 阿富汗' },
    { value: 'AL', label: 'Albania 阿尔巴尼亚' },
    { value: 'DZ', label: 'Algeria 阿尔及利亚' },
    { value: 'AD', label: 'Andorra 安道尔' },
    { value: 'AO', label: 'Angola 安哥拉' },
    { value: 'AR', label: 'Argentina 阿根廷' },
    { value: 'AM', label: 'Armenia 亚美尼亚' },
    { value: 'AU', label: 'Australia 澳大利亚' },
    { value: 'AT', label: 'Austria 奥地利' },
    { value: 'AZ', label: 'Azerbaijan 阿塞拜疆' },
    { value: 'BS', label: 'Bahamas 巴哈马' },
    { value: 'BH', label: 'Bahrain 巴林' },
    { value: 'BD', label: 'Bangladesh 孟加拉国' },
    { value: 'BB', label: 'Barbados 巴巴多斯' },
    { value: 'BY', label: 'Belarus 白俄罗斯' },
    { value: 'BE', label: 'Belgium 比利时' },
    { value: 'BZ', label: 'Belize 伯利兹' },
    { value: 'BJ', label: 'Benin 贝宁' },
    { value: 'BT', label: 'Bhutan 不丹' },
    { value: 'BO', label: 'Bolivia 玻利维亚' },
    { value: 'BA', label: 'Bosnia and Herzegovina 波斯尼亚和黑塞哥维那' },
    { value: 'BR', label: 'Brazil 巴西' },
    { value: 'BN', label: 'Brunei 文莱' },
    { value: 'BG', label: 'Bulgaria 保加利亚' },
    { value: 'BF', label: 'Burkina Faso 布基纳法索' },
    { value: 'BI', label: 'Burundi 布隆迪' },
    { value: 'KH', label: 'Cambodia 柬埔寨' },
    { value: 'CM', label: 'Cameroon 喀麦隆' },
    { value: 'CA', label: 'Canada 加拿大' },
    { value: 'CV', label: 'Cape Verde 佛得角' },
    { value: 'CF', label: 'Central African Republic 中非共和国' },
    { value: 'TD', label: 'Chad 乍得' },
    { value: 'CL', label: 'Chile 智利' },
    { value: 'CO', label: 'Colombia 哥伦比亚' },
    { value: 'KM', label: 'Comoros 科摩罗' },
    { value: 'CG', label: 'Congo (Republic) 刚果(布)' },
    { value: 'CD', label: 'Congo (Democratic Republic) 刚果(金)' },
    { value: 'CR', label: 'Costa Rica 哥斯达黎加' },
    { value: 'HR', label: 'Croatia 克罗地亚' },
    { value: 'CU', label: 'Cuba 古巴' },
    { value: 'CY', label: 'Cyprus 塞浦路斯' },
    { value: 'CZ', label: 'Czech Republic 捷克' },
    { value: 'DK', label: 'Denmark 丹麦' },
    { value: 'DJ', label: 'Djibouti 吉布提' },
    { value: 'DM', label: 'Dominica 多米尼克' },
    { value: 'DO', label: 'Dominican Republic 多米尼加' },
    { value: 'EC', label: 'Ecuador 厄瓜多尔' },
    { value: 'EG', label: 'Egypt 埃及' },
    { value: 'SV', label: 'El Salvador 萨尔瓦多' },
    { value: 'GQ', label: 'Equatorial Guinea 赤道几内亚' },
    { value: 'ER', label: 'Eritrea 厄立特里亚' },
    { value: 'EE', label: 'Estonia 爱沙尼亚' },
    { value: 'ET', label: 'Ethiopia 埃塞俄比亚' },
    { value: 'FJ', label: 'Fiji 斐济' },
    { value: 'FI', label: 'Finland 芬兰' },
    { value: 'FR', label: 'France 法国' },
    { value: 'GA', label: 'Gabon 加蓬' },
    { value: 'GM', label: 'Gambia 冈比亚' },
    { value: 'GE', label: 'Georgia 格鲁吉亚' },
    { value: 'DE', label: 'Germany 德国' },
    { value: 'GH', label: 'Ghana 加纳' },
    { value: 'GR', label: 'Greece 希腊' },
    { value: 'GD', label: 'Grenada 格林纳达' },
    { value: 'GT', label: 'Guatemala 危地马拉' },
    { value: 'GN', label: 'Guinea 几内亚' },
    { value: 'GW', label: 'Guinea-Bissau 几内亚比绍' },
    { value: 'GY', label: 'Guyana 圭亚那' },
    { value: 'HT', label: 'Haiti 海地' },
    { value: 'HN', label: 'Honduras 洪都拉斯' },
    { value: 'HU', label: 'Hungary 匈牙利' },
    { value: 'IS', label: 'Iceland 冰岛' },
    { value: 'IN', label: 'India 印度' },
    { value: 'ID', label: 'Indonesia 印度尼西亚' },
    { value: 'IR', label: 'Iran 伊朗' },
    { value: 'IQ', label: 'Iraq 伊拉克' },
    { value: 'IE', label: 'Ireland 爱尔兰' },
    { value: 'IL', label: 'Israel 以色列' },
    { value: 'IT', label: 'Italy 意大利' },
    { value: 'JM', label: 'Jamaica 牙买加' },
    { value: 'JP', label: 'Japan 日本' },
    { value: 'JO', label: 'Jordan 约旦' },
    { value: 'KZ', label: 'Kazakhstan 哈萨克斯坦' },
    { value: 'KE', label: 'Kenya 肯尼亚' },
    { value: 'KI', label: 'Kiribati 基里巴斯' },
    { value: 'KP', label: 'North Korea 朝鲜' },
    { value: 'KR', label: 'South Korea 韩国' },
    { value: 'KW', label: 'Kuwait 科威特' },
    { value: 'KG', label: 'Kyrgyzstan 吉尔吉斯斯坦' },
    { value: 'LA', label: 'Laos 老挝' },
    { value: 'LV', label: 'Latvia 拉脱维亚' },
    { value: 'LB', label: 'Lebanon 黎巴嫩' },
    { value: 'LS', label: 'Lesotho 莱索托' },
    { value: 'LR', label: 'Liberia 利比里亚' },
    { value: 'LY', label: 'Libya 利比亚' },
    { value: 'LI', label: 'Liechtenstein 列支敦士登' },
    { value: 'LT', label: 'Lithuania 立陶宛' },
    { value: 'LU', label: 'Luxembourg 卢森堡' },
    { value: 'MK', label: 'North Macedonia 北马其顿' },
    { value: 'MG', label: 'Madagascar 马达加斯加' },
    { value: 'MW', label: 'Malawi 马拉维' },
    { value: 'MY', label: 'Malaysia 马来西亚' },
    { value: 'MV', label: 'Maldives 马尔代夫' },
    { value: 'ML', label: 'Mali 马里' },
    { value: 'MT', label: 'Malta 马耳他' },
    { value: 'MH', label: 'Marshall Islands 马绍尔群岛' },
    { value: 'MR', label: 'Mauritania 毛里塔尼亚' },
    { value: 'MU', label: 'Mauritius 毛里求斯' },
    { value: 'MX', label: 'Mexico 墨西哥' },
    { value: 'FM', label: 'Micronesia 密克罗尼西亚' },
    { value: 'MD', label: 'Moldova 摩尔多瓦' },
    { value: 'MC', label: 'Monaco 摩纳哥' },
    { value: 'MN', label: 'Mongolia 蒙古' },
    { value: 'ME', label: 'Montenegro 黑山' },
    { value: 'MA', label: 'Morocco 摩洛哥' },
    { value: 'MZ', label: 'Mozambique 莫桑比克' },
    { value: 'MM', label: 'Myanmar 缅甸' },
    { value: 'NA', label: 'Namibia 纳米比亚' },
    { value: 'NR', label: 'Nauru 瑙鲁' },
    { value: 'NP', label: 'Nepal 尼泊尔' },
    { value: 'NL', label: 'Netherlands 荷兰' },
    { value: 'NZ', label: 'New Zealand 新西兰' },
    { value: 'NI', label: 'Nicaragua 尼加拉瓜' },
    { value: 'NE', label: 'Niger 尼日尔' },
    { value: 'NG', label: 'Nigeria 尼日利亚' },
    { value: 'NO', label: 'Norway 挪威' },
    { value: 'OM', label: 'Oman 阿曼' },
    { value: 'PK', label: 'Pakistan 巴基斯坦' },
    { value: 'PW', label: 'Palau 帕劳' },
    { value: 'PA', label: 'Panama 巴拿马' },
    { value: 'PG', label: 'Papua New Guinea 巴布亚新几内亚' },
    { value: 'PY', label: 'Paraguay 巴拉圭' },
    { value: 'PE', label: 'Peru 秘鲁' },
    { value: 'PH', label: 'Philippines 菲律宾' },
    { value: 'PL', label: 'Poland 波兰' },
    { value: 'PT', label: 'Portugal 葡萄牙' },
    { value: 'QA', label: 'Qatar 卡塔尔' },
    { value: 'RO', label: 'Romania 罗马尼亚' },
    { value: 'RU', label: 'Russia 俄罗斯' },
    { value: 'RW', label: 'Rwanda 卢旺达' },
    { value: 'KN', label: 'Saint Kitts and Nevis 圣基茨和尼维斯' },
    { value: 'LC', label: 'Saint Lucia 圣卢西亚' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines 圣文森特和格林纳丁斯' },
    { value: 'WS', label: 'Samoa 萨摩亚' },
    { value: 'SM', label: 'San Marino 圣马力诺' },
    { value: 'ST', label: 'Sao Tome and Principe 圣多美和普林西比' },
    { value: 'SA', label: 'Saudi Arabia 沙特阿拉伯' },
    { value: 'SN', label: 'Senegal 塞内加尔' },
    { value: 'RS', label: 'Serbia 塞尔维亚' },
    { value: 'SC', label: 'Seychelles 塞舌尔' },
    { value: 'SL', label: 'Sierra Leone 塞拉利昂' },
    { value: 'SG', label: 'Singapore 新加坡' },
    { value: 'SK', label: 'Slovakia 斯洛伐克' },
    { value: 'SI', label: 'Slovenia 斯洛文尼亚' },
    { value: 'SB', label: 'Solomon Islands 所罗门群岛' },
    { value: 'SO', label: 'Somalia 索马里' },
    { value: 'ZA', label: 'South Africa 南非' },
    { value: 'SS', label: 'South Sudan 南苏丹' },
    { value: 'ES', label: 'Spain 西班牙' },
    { value: 'LK', label: 'Sri Lanka 斯里兰卡' },
    { value: 'SD', label: 'Sudan 苏丹' },
    { value: 'SR', label: 'Suriname 苏里南' },
    { value: 'SE', label: 'Sweden 瑞典' },
    { value: 'CH', label: 'Switzerland 瑞士' },
    { value: 'SY', label: 'Syria 叙利亚' },
    { value: 'TJ', label: 'Tajikistan 塔吉克斯坦' },
    { value: 'TZ', label: 'Tanzania 坦桑尼亚' },
    { value: 'TH', label: 'Thailand 泰国' },
    { value: 'TL', label: 'Timor-Leste 东帝汶' },
    { value: 'TG', label: 'Togo 多哥' },
    { value: 'TO', label: 'Tonga 汤加' },
    { value: 'TT', label: 'Trinidad and Tobago 特立尼达和多巴哥' },
    { value: 'TN', label: 'Tunisia 突尼斯' },
    { value: 'TR', label: 'Turkey 土耳其' },
    { value: 'TM', label: 'Turkmenistan 土库曼斯坦' },
    { value: 'TV', label: 'Tuvalu 图瓦卢' },
    { value: 'UG', label: 'Uganda 乌干达' },
    { value: 'UA', label: 'Ukraine 乌克兰' },
    { value: 'AE', label: 'United Arab Emirates 阿联酋' },
    { value: 'UY', label: 'Uruguay 乌拉圭' },
    { value: 'UZ', label: 'Uzbekistan 乌兹别克斯坦' },
    { value: 'VU', label: 'Vanuatu 瓦努阿图' },
    { value: 'VA', label: 'Vatican City 梵蒂冈' },
    { value: 'VE', label: 'Venezuela 委内瑞拉' },
    { value: 'VN', label: 'Vietnam 越南' },
    { value: 'YE', label: 'Yemen 也门' },
    { value: 'ZM', label: 'Zambia 赞比亚' },
    { value: 'ZW', label: 'Zimbabwe 津巴布韦' },
    { value: 'Other', label: 'Other 其他' }
];

const LANGUAGES = [
    { value: 'zh', label: 'Chinese 中文' },
    { value: 'en', label: 'English 英语' },
    { value: 'tn', label: 'Setswana 茨瓦纳语' },
    { value: 'es', label: 'Spanish 西班牙语' },
    { value: 'fr', label: 'French 法语' },
    { value: 'ar', label: 'Arabic 阿拉伯语' },
    { value: 'ru', label: 'Russian 俄语' },
    { value: 'de', label: 'German 德语' },
    { value: 'ja', label: 'Japanese 日语' },
    { value: 'ko', label: 'Korean 韩语' },
    { value: 'pt', label: 'Portuguese 葡萄牙语' },
    { value: 'hi', label: 'Hindi 印地语' },
    { value: 'it', label: 'Italian 意大利语' },
    { value: 'tr', label: 'Turkish 土耳其语' },
    { value: 'vi', label: 'Vietnamese 越南语' },
    { value: 'pl', label: 'Polish 波兰语' },
    { value: 'nl', label: 'Dutch 荷兰语' },
    { value: 'th', label: 'Thai 泰语' },
    { value: 'fa', label: 'Persian 波斯语' },
    { value: 'he', label: 'Hebrew 希伯来语' },
    { value: 'sv', label: 'Swedish 瑞典语' },
    { value: 'id', label: 'Indonesian 印尼语' },
    { value: 'ms', label: 'Malay 马来语' },
    { value: 'other', label: 'Other 其他' },
    { value: 'none', label: 'None 无' }
];

const mainContent = document.getElementById('mainContent');
const appTitle = document.getElementById('appTitle');

let currentHSL = { h: 180, s: 50, l: 50 };

// Phase 2 State
let wordData = {};

// Custom Toast notification 
function showToast(message) {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'custom-toast';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #f56565;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';

    // Auto hide
    if (toast.hideTimeout) clearTimeout(toast.hideTimeout);
    toast.hideTimeout = setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('admin-body')) return;

    // Fullscreen Logic
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    showToast(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        });
    }

    updateStaticText(); // Sync title on load
    renderStep();

    // 全屏状态改变监听（处理 ESC 退出全屏的情况）
    document.addEventListener('fullscreenchange', () => {
        updateStaticText();
    });
});

function updateStaticText() {
    const t = i18n[currentLang];
    if (appTitle) {
        appTitle.textContent = t.title;
        // Adjust size based on language
        if (currentLang === 'en') {
            appTitle.style.fontSize = 'clamp(0.9rem, 2.5vw, 1.1rem)'; // ~60% of original
        } else {
            appTitle.style.fontSize = 'clamp(1.2rem, 4vw, 1.8rem)';
        }
    }
    document.title = t.title;

    // Update Fullscreen Button Text
    const fsText = document.getElementById('fullscreenBtnText');
    if (fsText) {
        fsText.textContent = document.fullscreenElement ? t.fullScreenExit : t.fullScreenEnter;
    }

    const textInfo = document.getElementById('text-info');
    if (textInfo) {
        textInfo.textContent = 'Information';
        const segTask1Text = document.querySelector('#seg-task1 .segment-text');
        const segTask2Text = document.querySelector('#seg-task2 .segment-text');
        if (segTask1Text) segTask1Text.textContent = 'Task 1';
        if (segTask2Text) segTask2Text.textContent = 'Task 2';
    }
}

function renderStep() {
    // 强制每次切换界面都回到顶部
    window.scrollTo(0, 0);

    // Reset interaction
    if (currentStep > 0 && currentStep <= EMOTION_KEYS.length) {
        hasHueInteracted = false;
    }

    // Toggle Header Visibility
    const header = document.getElementById('mainHeader');
    if (header) {
        header.style.display = currentStep > 0 ? 'none' : 'flex';
    }

    if (currentStep > 0) {
        document.body.style.zoom = ""; // 弃用问题多多的非标准属性
        document.body.style.transform = "scale(0.96)";
        document.body.style.transformOrigin = "top center";
    } else {
        document.body.style.zoom = "";
        document.body.style.transform = "none";
        document.body.style.transformOrigin = "top center";
    }

    updateProgress();
    const t = i18n[currentLang];

    const PHASE1_END = EMOTION_KEYS.length;
    const PHASE2_START = PHASE1_END + 1; // Intro
    const PHASE2_TRIALS_START = PHASE2_START + 1;
    const PHASE2_END = PHASE2_TRIALS_START + WORD_KEYS.length - 1;

    if (currentStep === -4) {
        renderGroupSelection(t);
    } else if (currentStep === -3) {
        renderConsent(t);
    } else if (currentStep === -2) {
        renderInstructions(t);
    } else if (currentStep === -1) {
        renderColorBlindTest(t);
    } else if (currentStep === 0) {
        renderUserInfoForm(t);
    } else if (currentStep === 0.5) {
        renderPhase1Tutorial(t);
    } else if (currentStep >= 1 && currentStep <= PHASE1_END) {
        requestAnimationFrame(() => {
            renderColorPicker(randomizedEmotionKeys[currentStep - 1], t);
        });
    } else if (currentStep === PHASE2_START) {
        renderGEWIntro(t);
    } else if (currentStep >= PHASE2_TRIALS_START && currentStep <= PHASE2_END) {
        const wordIndex = currentStep - PHASE2_TRIALS_START;
        renderGEWTrial(randomizedWordKeys[wordIndex], t);
    } else {
        renderThankYou(t);
    }
}

function updateProgress() {
    const bar = document.getElementById('globalProgressBar');
    if (!bar) return;
    
    let phase = 'info'; // Default phase for steps <= 0 (Consent, Instructions, ColorBlind, UserInfo)

    if (typeof EMOTION_KEYS === 'undefined' || typeof WORD_KEYS === 'undefined') return;

    const PHASE1_END = EMOTION_KEYS.length;
    const PHASE2_INTRO = PHASE1_END + 1;
    const PHASE2_TRIALS_START = PHASE1_END + 2;
    const PHASE2_END = PHASE2_TRIALS_START + WORD_KEYS.length - 1;

    // 在填写信息页面（step < 0.5）之前，进度条不显示
    if (currentStep < 0.5) {
        bar.style.display = 'none';
        return;
    } else {
        bar.style.display = 'flex';
    }

    // step=0.5 是 Phase1 Tutorial，属于 info 阶段（不推进 task1）
    if (currentStep >= 1 && currentStep <= PHASE1_END) {
        phase = 'task1';
    } else if (currentStep >= PHASE2_INTRO && currentStep <= PHASE2_END) {
        phase = 'task2';
    } else if (currentStep > PHASE2_END) {
        phase = 'done';
    }

    const fillInfo = document.getElementById('fill-info');
    const fillTask1 = document.getElementById('fill-task1');
    const fillTask2 = document.getElementById('fill-task2');

    if (!fillInfo || !fillTask1 || !fillTask2) return;

    if (phase === 'info') {
        fillInfo.style.width = '100%'; 
        fillTask1.style.width = '0%';
        fillTask2.style.width = '0%';
    } else if (phase === 'task1') {
        fillInfo.style.width = '100%';
        const task1Percent = (currentStep / PHASE1_END) * 100;
        fillTask1.style.width = `${task1Percent}%`;
        fillTask2.style.width = '0%';
    } else if (phase === 'task2') {
        fillInfo.style.width = '100%';
        fillTask1.style.width = '100%';
        const task2Index = currentStep >= PHASE2_TRIALS_START ? (currentStep - PHASE2_TRIALS_START + 1) : 0;
        const task2Percent = Math.min(100, (task2Index / WORD_KEYS.length) * 100);
        fillTask2.style.width = `${task2Percent}%`;
    } else if (phase === 'done') {
        fillInfo.style.width = '100%';
        fillTask1.style.width = '100%';
        fillTask2.style.width = '100%';
    }
}

function renderGroupSelection(t) {
    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.groupSelect}</h2>
            <p style="margin-bottom: 20px; font-weight: bold; color: #d97706; text-align: center;">
                P.S: This survey contains Karma to get free survey responses at SurveySwap.io
            </p>
            <div class="form-group">
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('CN')">${t.groupCN}</button>
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('UK')">${t.groupUK}</button>
                 <button class="btn secondary-btn" style="margin-bottom:1rem" onclick="selectGroup('US')">${t.groupUS}</button>
                 <button class="btn secondary-btn" onclick="selectGroup('BW')">${t.groupBW}</button>
            </div>
        </div>
    `;
}

window.selectGroup = (group) => {
    currentGroup = group;
    // 将全部组别的默认语言统一设为英文
    currentLang = 'en';

    updateStaticText();
    currentStep++;
    renderStep();
};

function renderConsent(t) {
    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.consentTitle}</h2>
            <p style="margin-bottom: 2rem; line-height: 1.8;">${t.consentContent}</p>
            <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="consentCheck" style="width: auto;">
                <label for="consentCheck" style="margin:0; cursor:pointer;">${t.consentCheck}</label>
            </div>
            <button id="consentBtn" class="btn primary-btn" disabled>${t.next}</button>
        </div>
    `;

    const check = document.getElementById('consentCheck');
    const btn = document.getElementById('consentBtn');

    check.addEventListener('change', () => {
        btn.disabled = !check.checked;
        btn.style.opacity = check.checked ? '1' : '0.5';
    });

    btn.addEventListener('click', () => {
        if (check.checked) {
            currentStep++;
            renderStep();
        } else {
            showToast(t.errorConsent);
        }
    });
}

function renderInstructions(t) {
    const isEn = currentLang === 'en';
    const ovTitle = isEn ? 'Experimental Procedure Overview' : '实验流程概览';
    const ovDesc = isEn ? 'The experiment consists of <b>two tasks</b>.<br>It will take a total of 10 minutes.' : '本实验包含<b>两项主任务</b>。<br>总共耗时约 10 分钟。';
    const t1Title = isEn ? 'Task 1<br>Emotion-to-Color' : '任务一<br>情感提取色彩';
    const t1Sub = isEn ? '20 emotion keywords' : '20 个情感词汇';
    const t2Title = isEn ? 'Task 2<br>Color-to-Emotion' : '任务二<br>色彩联想情感';
    const t2Sub = isEn ? '11 colors' : '11 种颜色';
    const nextText = isEn ? 'Next' : '开始';

    const task1SVG = `
    <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; max-width: 250px;">
      <text x="150" y="40" font-size="12" text-anchor="middle" fill="#666">Interest</text>
      <circle cx="150" cy="70" r="15" fill="#db7e15" />
      <defs>
        <linearGradient id="hueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ff0000" /><stop offset="17%" stop-color="#ffff00" /><stop offset="33%" stop-color="#00ff00" /><stop offset="50%" stop-color="#00ffff" /><stop offset="67%" stop-color="#0000ff" /><stop offset="83%" stop-color="#ff00ff" /><stop offset="100%" stop-color="#ff0000" />
        </linearGradient>
        <linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" /><stop offset="100%" stop-color="#db7e15" />
        </linearGradient>
        <linearGradient id="valGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#000000" /><stop offset="100%" stop-color="transparent" />
        </linearGradient>
      </defs>
      <rect x="25" y="100" width="250" height="6" fill="url(#hueGrad)" rx="3" />
      <circle cx="65" cy="103" r="5" fill="white" stroke="#ccc" />
      <rect x="25" y="115" width="250" height="90" fill="url(#satGrad)" rx="4" />
      <rect x="25" y="115" width="250" height="90" fill="url(#valGrad)" rx="4" />
      <circle cx="210" cy="130" r="4" fill="transparent" stroke="white" stroke-width="1.5" />
      <rect x="25" y="215" width="250" height="20" fill="black" rx="2" />
      <text x="150" y="228" font-size="8" text-anchor="middle" fill="white" font-weight="bold">NEXT</text>
    </svg>
    `;

    const task2IMG = `<img src="over.png" alt="Task 2 Preview" style="width:100%; height:auto; max-width: 250px; display:block; margin: 0 auto;">`;

    mainContent.innerHTML = `
        <div class="card" style="max-width: 900px; padding: 2rem;">
            <h2 style="text-align: center; font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">${ovTitle}</h2>
            <p style="text-align: center; font-size: 1.1rem; color: #333; margin-bottom: 2rem; line-height: 1.6;">
                ${ovDesc}
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; margin-bottom: 3rem;">
                <!-- Task 1 Card -->
                <div style="flex: 1; min-width: 280px; max-width: 400px; text-align: center;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #000; line-height: 1.3;">${t1Title}</h3>
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        ${task1SVG}
                    </div>
                    <p style="font-size: 1rem; color: #444;">${t1Sub}</p>
                </div>

                <!-- Task 2 Card -->
                <div style="flex: 1; min-width: 280px; max-width: 400px; text-align: center;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #000; line-height: 1.3;">${t2Title}</h3>
                    <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                        ${task2IMG}
                    </div>
                    <p style="font-size: 1rem; color: #444;">${t2Sub}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <button id="fullscreenBtn" class="btn secondary-btn" style="border-radius: 4px; font-size: 0.9rem; padding: 8px 16px; background: transparent; border: 1px solid #ccc; cursor: pointer; color: #333; font-weight: bold;">
                    <svg style="width:16px; height:16px; vertical-align:middle; margin-right:6px; display:inline-block;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    ${t.enterFullScreen}
                </button>
            </div>

            <div style="text-align: center;">
                <button id="instBtn" class="btn" style="width: 100%; max-width: 250px; padding: 15px; font-size: 1.3rem; background-color: #000; color: #fff; font-weight: bold; border-radius: 6px; cursor: pointer; border: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">${nextText}</button>
            </div>
        </div>
    `;

    const fsBtn = document.getElementById('fullscreenBtn');
    if (fsBtn) {
        fsBtn.addEventListener('click', () => {
            const docObj = document.documentElement;
            if (docObj.requestFullscreen) {
                docObj.requestFullscreen();
            } else if (docObj.mozRequestFullScreen) { // Firefox
                docObj.mozRequestFullScreen();
            } else if (docObj.webkitRequestFullscreen) { // Chrome, Safari and Opera
                docObj.webkitRequestFullscreen();
            } else if (docObj.msRequestFullscreen) { // IE/Edge
                docObj.msRequestFullscreen();
            }
        });
    }

    document.getElementById('instBtn').addEventListener('click', () => {
        currentStep++;
        renderStep();
    });
}

function renderColorBlindTest(t) {
    const plates1 = [
        { src: 'ishihara_plate_1.png', answer: '8' },
        { src: 'ishihara_plate_2.png', answer: '74' },
        { src: 'ishihara_plate_3.png', answer: '5' },
        { src: 'ishihara_plate_4.png', answer: '42' },
        { src: 'ishihara_plate_5.png', answer: '29' },
    ];
    const plates2 = [
        { src: 'ishihara_plate_6.png', answer: '12' },
        { src: 'ishihara_plate_7.png', answer: '5' },
        { src: 'ishihara_plate_8.png', answer: '62' },
        { src: 'ishihara_plate_9.png', answer: '61' },
        { src: 'ishihara_plate_10.png', answer: '17' },
    ];
    const plate1 = plates1[Math.floor(Math.random() * plates1.length)];
    const plate2 = plates2[Math.floor(Math.random() * plates2.length)];

    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.cbTitle}</h2>
            <p style="margin-bottom: 2rem;">${t.cbDesc}</p>
            <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                <div style="text-align: center;">
                    <img src="${plate1.src}" alt="Color Blind Test 1" style="max-width: 250px; border-radius: 8px; margin-bottom: 1rem;">
                    <div class="form-group">
                        <input type="number" id="cbInput1" placeholder="${t.cbPlaceholder}" style="text-align:center;">
                    </div>
                </div>
                <div style="text-align: center;">
                    <img src="${plate2.src}" alt="Color Blind Test 2" style="max-width: 250px; border-radius: 8px; margin-bottom: 1rem;">
                    <div class="form-group">
                        <input type="number" id="cbInput2" placeholder="${t.cbPlaceholder}" style="text-align:center;">
                    </div>
                </div>
            </div>
            <button id="cbBtn" class="btn primary-btn">${t.next}</button>
        </div>
    `;

    document.getElementById('cbBtn').addEventListener('click', () => {
        const input1 = document.getElementById('cbInput1').value.trim();
        const input2 = document.getElementById('cbInput2').value.trim();
        if (input1 === plate1.answer && input2 === plate2.answer) {
            isColorBlind = false;
            currentStep++;
            renderStep();
        } else {
            isColorBlind = true;
            // 跳过后续步骤，直接到达感谢页面
            currentStep = 999;
            renderThankYou(t);
        }
    });
}

function renderUserInfoForm(t) {
    const processLabel = (label) => currentLang === 'en' ? label.replace(/\s*[\u4e00-\u9fa5]+.*$/, '').trim() : label;

    const countryOptions = `<option value="">${t.select}</option>` +
        COUNTRIES.map(c => `<option value="${c.value}">${processLabel(c.label)}</option>`).join('');

    // Filter 'none' for native language (must have one)
    const langOptions = `<option value="">${t.select}</option>` +
        LANGUAGES.filter(l => l.value !== 'none').map(l => `<option value="${l.value}">${processLabel(l.label)}</option>`).join('');

    const secondLangOptions = `<option value="">${t.select}</option>` +
        LANGUAGES.map(l => `<option value="${l.value}">${processLabel(l.label)}</option>`).join('');

    const detectedStr = `${t.detectedInfo}: ${displayInfo.userAgent.includes('Mobile') ? 'Mobile/Tablet' : 'Desktop'}, Gamut: ${displayInfo.colorGamut.toUpperCase()}`;

    mainContent.innerHTML = `
        <div class="card">
            <h2>${t.userInfo}</h2>
            <p style="margin-bottom: 10px; color: #666;">${t.infoDesc}</p>
            <p style="margin-bottom: 20px; font-weight: bold; color: #d97706;">
                P.S: This survey contains Karma to get free survey responses at SurveySwap.io
            </p>
            
            <div style="background:#f0f0f0; padding:10px; margin-bottom:20px; border:1px solid #ccc; font-size:0.9rem;">
                ${detectedStr}
            </div>

            <form id="infoForm">
                <!-- Monitor Model -->
                <div class="form-group">
                    <label for="monitorModel">${t.monitorModel}</label>
                    <input type="text" id="monitorModel" placeholder="${t.monitorPlaceholder}">
                </div>

                <!-- Birth Date -->
                <div class="form-group" style="display:flex; gap:1rem;">
                    <div style="flex:1;">
                        <label for="birthYear">${t.birthYear}</label>
                        <input type="number" id="birthYear" required min="1900" max="2025" placeholder="YYYY">
                    </div>
                    <div style="flex:1;">
                        <label for="birthMonth">${t.birthMonth}</label>
                        <select id="birthMonth" required>
                            <option value="">${t.select}</option>
                            ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="gender">${t.gender}</label>
                    <select id="gender" required>
                        <option value="">${t.select}</option>
                        <option value="male" ${userInfo.gender === 'male' ? 'selected' : ''}>${t.male}</option>
                        <option value="female" ${userInfo.gender === 'female' ? 'selected' : ''}>${t.female}</option>
                        <option value="other" ${userInfo.gender === 'other' ? 'selected' : ''}>${t.other}</option>
                    </select>
                </div>

                <!-- Nationality & Residence -->
                <div class="form-group">
                    <label for="nationality">${t.nationality}</label>
                    <select id="nationality" required>${countryOptions}</select>
                    <input type="text" id="nationalityOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="${currentLang === 'zh' ? '请注明' : 'Please specify'}">
                </div>

                <div class="form-group">
                    <label for="residence">${t.residence}</label>
                    <select id="residence" required>${countryOptions}</select>
                    <input type="text" id="residenceOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="${currentLang === 'zh' ? '请注明' : 'Please specify'}">
                </div>

                <div class="form-group">
                    <label for="residenceDuration">${t.residenceDuration}</label>
                    <input type="number" id="residenceDuration" required min="0" step="0.5">
                </div>

                <!-- Language -->
                <div class="form-group">
                    <label for="nativeLang">${t.nativeLang}</label>
                    <select id="nativeLang" required>${langOptions}</select>
                    <input type="text" id="nativeLangOther" class="other-input" style="display:none; margin-top:0.5rem;" placeholder="Please specify / 请注明">
                </div>
                 <div class="form-group">
                    <label for="speaksEnglish">${t.speaksEnglish}</label>
                    <select id="speaksEnglish" required>
                        <option value="">${t.select}</option>
                        <option value="yes">${t.yes}</option>
                        <option value="no">${t.no}</option>
                    </select>
                </div>

                <!-- Profession -->
                <div class="form-group">
                    <label>${t.isDesigner}</label>
                    <select id="isDesigner" required>
                        <option value="">${t.select}</option>
                        <option value="yes">${t.yes}</option>
                        <option value="no">${t.no}</option>
                    </select>
                </div>

                <!-- Color Blindness self-report -->
                <div class="form-group">
                    <label>${t.hasColorBlindness}</label>
                    <select id="hasColorBlindness" required>
                        <option value="">${t.select}</option>
                        <option value="yes">${t.yes}</option>
                        <option value="no">${t.no}</option>
                    </select>
                </div>

                <button type="submit" class="btn primary-btn">${t.start}</button>
            </form>
        </div>
    `;

    // Helper to toggle other input
    const setupOtherToggle = (selectId, inputId) => {
        const select = document.getElementById(selectId);
        const input = document.getElementById(inputId);
        select.addEventListener('change', () => {
            const isOther = select.value === 'Other' || select.value === 'other';
            input.style.display = isOther ? 'block' : 'none';
            input.required = isOther;
        });
    };

    setupOtherToggle('nationality', 'nationalityOther');
    setupOtherToggle('residence', 'residenceOther');
    setupOtherToggle('nativeLang', 'nativeLangOther');

    document.getElementById('infoForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const birthYear = document.getElementById('birthYear').value;
        if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
            showToast(t.errorAge);
            return;
        }

        const getValue = (id, otherId) => {
            const val = document.getElementById(id).value;
            if (val === 'Other' || val === 'other') {
                return document.getElementById(otherId).value;
            }
            return val;
        };

        userInfo = {
            birth_year: birthYear,
            birth_month: document.getElementById('birthMonth').value,
            gender: document.getElementById('gender').value,
            nationality: getValue('nationality', 'nationalityOther'),
            residence: getValue('residence', 'residenceOther'),
            residence_duration: document.getElementById('residenceDuration').value,
            native_lang: getValue('nativeLang', 'nativeLangOther'),
            speaks_english: document.getElementById('speaksEnglish').value === 'yes',
            is_designer: document.getElementById('isDesigner').value === 'yes',
            monitor_model: document.getElementById('monitorModel').value || 'Unknown',
            has_color_blindness: document.getElementById('hasColorBlindness').value === 'yes'
        };

        if (userInfo.has_color_blindness) {
            currentStep = 999;
            renderThankYou(t);
            return;
        }

        startTime = Date.now();
        currentStep = 0.5; // 进入第一阶段教程
        renderStep();
    });
}

function renderPhase1Tutorial(t) {
    mainContent.innerHTML = `
        <div class="card" style="max-width: 600px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 2rem;">${t.phase1TutorialTitle}</h2>
            
            <div id="tutPreviewContainer" style="display: flex; justify-content: center; margin-bottom: 1rem; visibility: hidden;">
                <div id="tutColorPreview" class="color-preview-box" style="width: 80px; height: 80px; background-color: hsl(180, 50%, 50%);"></div>
            </div>

            <p style="text-align: center; margin-bottom: 1.5rem; font-size: 1.1rem; color: #333;">${t.phase1TutorialDesc1}<br><br>${t.phase1TutorialDesc2}</p>
            <div style="text-align: left; margin: 0 auto 1.5rem auto; max-width: 500px; color: #64748b; line-height: 1.6;">
                ${t.phase1TutorialStep1}<br><br>
                ${t.phase1TutorialStep2}<br><br>
                ${t.phase1TutorialStep3}
            </div>
            
            <div class="color-picker-wrapper">
                <div class="hue-slider-container" style="width: 100%">
                    <input type="range" id="tutHueSlider" min="0" max="360" value="180">
                </div>
                
                <div id="tutHueHintBox" class="guide-hint">${t.hueHint}</div>

                <div class="palette-area hidden" id="tutPaletteArea">
                    <canvas id="tutPaletteCanvas"></canvas>
                    <div id="tutPaletteCursor" class="palette-cursor"></div>
                </div>

                <div class="preview-bar hidden" id="tutValuesBar" style="justify-content: center;">
                    <div style="font-size: 0.9rem; color: #666; display: flex; gap: 1rem;">
                       <span>H: <span id="tutHueVal">180</span></span>
                       <span>S: <span id="tutSatVal">50%</span></span>
                       <span>L: <span id="tutLightVal">50%</span></span>
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; margin-top: 2rem;">
                <button id="tutStartBtn" class="btn primary-btn disabled" disabled style="opacity: 0.5;">${t.phase1TutorialUnderstood}</button>
            </div>
        </div>
    `;

    // 绑定交互逻辑
    const tutHueSlider = document.getElementById('tutHueSlider');
    const tutCanvas = document.getElementById('tutPaletteCanvas');
    const tutCursor = document.getElementById('tutPaletteCursor');
    const tutHueVal = document.getElementById('tutHueVal');
    const tutSatVal = document.getElementById('tutSatVal');
    const tutLightVal = document.getElementById('tutLightVal');
    const tutPaletteArea = document.getElementById('tutPaletteArea');
    const tutHueHintBox = document.getElementById('tutHueHintBox');
    const tutValuesBar = document.getElementById('tutValuesBar');
    const tutStartBtn = document.getElementById('tutStartBtn');

    let tutHasHueInteracted = false;
    let tutHasPaletteInteracted = false;
    let tutCurrentHSL = { h: 180, s: 50, l: 50 };
    let tutLastX = 0; let tutLastY = 0;
    const ctx = tutCanvas.getContext('2d');

    const checkTutorialComplete = () => {
        if (tutHasHueInteracted && tutHasPaletteInteracted) {
            tutStartBtn.disabled = false;
            tutStartBtn.style.opacity = '1';
        }
    };

    function resizeCanvas() {
        if (tutPaletteArea.classList.contains('hidden')) return;
        tutCanvas.width = tutPaletteArea.offsetWidth;
        tutCanvas.height = tutPaletteArea.offsetHeight;
        drawPalette();
        updateCursorPosition();
    }

    function drawPalette() {
        const width = tutCanvas.width;
        const height = tutCanvas.height;
        const h = tutCurrentHSL.h;
        ctx.clearRect(0, 0, width, height);

        const gradH = ctx.createLinearGradient(0, 0, width, 0);
        gradH.addColorStop(0, '#fff');
        gradH.addColorStop(1, `hsl(${h}, 100%, 50%)`);
        ctx.fillStyle = gradH;
        ctx.fillRect(0, 0, width, height);

        const gradV = ctx.createLinearGradient(0, 0, 0, height);
        gradV.addColorStop(0, 'rgba(0,0,0,0)');
        gradV.addColorStop(1, '#000');
        ctx.fillStyle = gradV;
        ctx.fillRect(0, 0, width, height);
    }

    function updateHSLFromPosition(x, y) {
        tutLastX = x; tutLastY = y;
        const rect = tutCanvas.getBoundingClientRect();
        const width = tutCanvas.width || 1;
        const height = tutCanvas.height || 1;
        const safeX = Math.max(0, Math.min(x, width));
        const safeY = Math.max(0, Math.min(y, height));

        const s_hsv = safeX / width;
        const v_hsv = 1 - (safeY / height);
        const h = parseInt(tutHueSlider.value);

        let l = v_hsv * (1 - s_hsv / 2);
        let s_hsl = 0;
        if (l > 0 && l < 1) {
            s_hsl = (v_hsv - l) / Math.min(l, 1 - l);
        }

        tutCurrentHSL.h = h;
        tutCurrentHSL.s = Math.round(s_hsl * 100);
        tutCurrentHSL.l = Math.round(l * 100);

        updateUI();
    }

    function updateUI() {
        const { h, s, l } = tutCurrentHSL;
        const colorString = `hsl(${h}, ${s}%, ${l}%)`;
        const tutPreview = document.getElementById('tutColorPreview');
        if (tutPreview) {
            tutPreview.style.backgroundColor = colorString;
        }
        tutHueVal.textContent = h;
        tutSatVal.textContent = `${s}%`;
        tutLightVal.textContent = `${l}%`;
        tutCursor.style.left = `${tutLastX}px`;
        tutCursor.style.top = `${tutLastY}px`;
        tutCursor.style.backgroundColor = colorString;
    }

    function updateCursorPosition() {
        updateUI();
    }

    tutHueSlider.addEventListener('input', () => {
        if (!tutHasHueInteracted) {
            tutHasHueInteracted = true;
            tutHueHintBox.classList.add('hidden');
            tutPaletteArea.classList.remove('hidden');
            tutValuesBar.classList.remove('hidden');
            const previewContainer = document.getElementById('tutPreviewContainer');
            if (previewContainer) previewContainer.style.visibility = 'visible';
            resizeCanvas();
            tutLastX = tutCanvas.width / 2;
            tutLastY = tutCanvas.height / 2;
        }
        tutCurrentHSL.h = parseInt(tutHueSlider.value);
        drawPalette();
        updateHSLFromPosition(tutLastX, tutLastY);
        checkTutorialComplete();
    });

    let isDragging = false;

    const handleStart = (e) => {
        isDragging = true;
        tutHasPaletteInteracted = true;
        checkTutorialComplete();
        handleMove(e);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        if (e.cancelable) e.preventDefault();
        const rect = tutCanvas.getBoundingClientRect();
        let clientX = e.clientX;
        let clientY = e.clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        const ratioX = (clientX - rect.left) / (rect.width || 1);
        const ratioY = (clientY - rect.top) / (rect.height || 1);
        const x = ratioX * tutCanvas.width;
        const y = ratioY * tutCanvas.height;
        updateHSLFromPosition(x, y);
    };

    const handleEnd = () => { isDragging = false; };

    tutPaletteArea.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    tutPaletteArea.addEventListener('touchstart', handleStart);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    tutStartBtn.addEventListener('click', () => {
        if (!tutStartBtn.disabled) {
            // 清理事件，因为我们绑在 window 上
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
            startPhase1();
        }
    });
}

window.startPhase1 = () => {
    randomizedEmotionKeys = shuffleArray(EMOTION_KEYS);
    currentStep = 1;
    renderStep();
};

function renderColorPicker(emotionKey, t) {
    let emotionDisplay = t.emotions[emotionKey] || emotionKey;

    // Dual Language for CN Group
    if (currentGroup === 'CN') {
        const en = i18n.en.emotions[emotionKey] || emotionKey;
        const zh = i18n.zh.emotions[emotionKey] || emotionKey;
        // avoid duplication if key itself is the value or missing
        emotionDisplay = `${en} (${zh})`;
    }

    // Initial display is hidden/placeholder
    // Phase 4: Logic to hide preview/palette until hue move

    mainContent.innerHTML = `
        <div class="card">
            <h2 style="text-align: center; font-size: 2.2rem; font-weight: 800; margin-bottom: 1.5rem;">${emotionDisplay}</h2>
            
            <div id="previewContainer" style="display: flex; justify-content: center; margin-bottom: 1rem; visibility: hidden;">
                <div id="colorPreview" class="color-preview-box" style="width: 80px; height: 80px; background-color: hsl(${currentHSL.h}, ${currentHSL.s}%, ${currentHSL.l}%);"></div>
            </div>

            <p style="text-align: center; margin-bottom: 2rem; color: #64748b; font-size: ${window.innerWidth < 600 ? '1.17rem' : '1.3rem'}; font-weight: 500;">${t.emotionInstruction(emotionDisplay)}</p>
            
            <div class="color-picker-wrapper">
                <div class="hue-slider-container" style="width: 100%">
                    <input type="range" id="hueSlider" min="0" max="360" value="${currentHSL.h}">
                </div>
                
                <div id="hueHintBox" class="guide-hint">${t.hueHint}</div>

                <div class="palette-area hidden" id="paletteArea">
                    <canvas id="paletteCanvas"></canvas>
                    <div id="paletteCursor" class="palette-cursor"></div>
                </div>

                <div class="preview-bar hidden" id="valuesBar" style="justify-content: center;">
                    <div style="font-size: 0.9rem; color: #666; display: flex; gap: 1rem;">
                       <span>H: <span id="hueVal">${currentHSL.h}</span></span>
                       <span>S: <span id="satVal">${currentHSL.s}%</span></span>
                       <span>L: <span id="lightVal">${currentHSL.l}%</span></span>
                    </div>
                </div>
            </div>

            <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
                <button id="prevBtn" class="btn secondary-btn ${currentStep === 1 ? 'hidden' : ''}">${t.back || 'Back'}</button>
                <button id="nextBtn" class="btn primary-btn hidden">
                    ${currentStep === EMOTION_KEYS.length ? t.submit : t.next}
                </button>
            </div>
        </div>
    `;

    const hueSlider = document.getElementById('hueSlider');
    const canvas = document.getElementById('paletteCanvas');
    const cursor = document.getElementById('paletteCursor');
    const preview = document.getElementById('colorPreview');
    const hueVal = document.getElementById('hueVal');
    const satVal = document.getElementById('satVal');
    const lightVal = document.getElementById('lightVal');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const paletteArea = document.getElementById('paletteArea');
    const hueHintBox = document.getElementById('hueHintBox');
    const valuesBar = document.getElementById('valuesBar');
    const previewContainer = document.getElementById('previewContainer');

    // ... (context init)

    // Add Prev Listener
    prevBtn.addEventListener('click', () => {
        currentStep--;
        renderStep();
    });

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        if (paletteArea.classList.contains('hidden')) return; // Don't resize if hidden
        canvas.width = paletteArea.offsetWidth;
        canvas.height = paletteArea.offsetHeight;
        drawPalette();
        updateCursorPosition(); // Just refresh based on state
    }

    function revealTools() {
        if (hasHueInteracted) return;
        hasHueInteracted = true;

        hueHintBox.classList.add('hidden');
        paletteArea.classList.remove('hidden');
        valuesBar.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        previewContainer.style.visibility = 'visible';

        resizeCanvas();
        // Reset X/Y to center
        lastX = canvas.width / 2;
        lastY = canvas.height / 2;
        updateHSLFromPosition(lastX, lastY);
    }

    function drawPalette() {
        const width = canvas.width;
        const height = canvas.height;
        const h = currentHSL.h;

        ctx.clearRect(0, 0, width, height);

        const gradH = ctx.createLinearGradient(0, 0, width, 0);
        gradH.addColorStop(0, '#fff');
        gradH.addColorStop(1, `hsl(${h}, 100%, 50%)`);
        ctx.fillStyle = gradH;
        ctx.fillRect(0, 0, width, height);

        const gradV = ctx.createLinearGradient(0, 0, 0, height);
        gradV.addColorStop(0, 'rgba(0,0,0,0)');
        gradV.addColorStop(1, '#000');
        ctx.fillStyle = gradV;
        ctx.fillRect(0, 0, width, height);
    }

    function updateColorFromSlider() {
        if (!hasHueInteracted) revealTools();

        currentHSL.h = parseInt(hueSlider.value);
        drawPalette();
        // Keep S/L consistent? No, re-evaluate from last pos?
        // Actually, changing hue shouldn't change S/V position, so HSL should update based on lastX, lastY
        updateHSLFromPosition(lastX, lastY);
    }

    let lastX = 0;
    let lastY = 0;

    function updateHSLFromPosition(x, y) {
        lastX = x;
        lastY = y;

        const width = canvas.offsetWidth || 1;
        const height = canvas.offsetHeight || 1;

        const safeX = Math.max(0, Math.min(x, width));
        const safeY = Math.max(0, Math.min(y, height));

        const s_hsv = safeX / width;
        const v_hsv = 1 - (safeY / height);
        const h = parseInt(hueSlider.value);

        let l = v_hsv * (1 - s_hsv / 2);
        let s_hsl = 0;
        if (l > 0 && l < 1) {
            s_hsl = (v_hsv - l) / Math.min(l, 1 - l);
        }

        currentHSL.h = h;
        currentHSL.s = Math.round(s_hsl * 100);
        currentHSL.l = Math.round(l * 100);

        updateUI();
    }

    function updateUI() {
        const { h, s, l } = currentHSL;
        const colorString = `hsl(${h}, ${s}%, ${l}%)`;
        preview.style.backgroundColor = colorString;
        hueVal.textContent = h;
        satVal.textContent = `${s}%`;
        lightVal.textContent = `${l}%`;

        cursor.style.left = `${lastX}px`;
        cursor.style.top = `${lastY}px`;
        cursor.style.backgroundColor = colorString;
    }

    function updateCursorPosition() {
        updateUI();
    }

    window.addEventListener('resize', () => {
        if (!paletteArea.classList.contains('hidden')) {
            resizeCanvas();
            // Restore visual position from currentHSL
            // We need to re-calculate lastX/lastY from HSL because resize changes width/height
            // Reverse HSL -> HSV -> XY
            const { h, s, l } = currentHSL;
            const s_hsl = s / 100;
            const l_val = l / 100;

            const v_hsv = l_val + s_hsl * Math.min(l_val, 1 - l_val);
            const s_hsv = v_hsv === 0 ? 0 : 2 * (1 - l_val / v_hsv);

            lastX = s_hsv * canvas.width;
            lastY = (1 - v_hsv) * canvas.height;
            updateCursorPosition();
        }
    });

    // Check for existing data
    // Check for existing data
    if (colorData[emotionKey]) {
        const saved = colorData[emotionKey];

        // Manual Reveal to avoid destructive reset logic in revealTools()
        if (!hasHueInteracted) {
            hasHueInteracted = true;
            hueHintBox.classList.add('hidden');
            paletteArea.classList.remove('hidden');
            valuesBar.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            previewContainer.style.visibility = 'visible';
        }

        // Restore State
        currentHSL = { h: saved.h, s: saved.s, l: saved.l };
        hueSlider.value = saved.h;

        // Draw Palette with restored Hue
        // We must call this AFTER setting hueSlider/currentHSL so it draws the correct hue gradient
        resizeCanvas();

        // Calculate XY
        const s_hsl = saved.s / 100;
        const l_val = saved.l / 100;
        const v_hsv = l_val + s_hsl * Math.min(l_val, 1 - l_val);
        const s_hsv = v_hsv === 0 ? 0 : 2 * (1 - l_val / v_hsv);

        lastX = s_hsv * canvas.width;
        lastY = (1 - v_hsv) * canvas.height;

        updateUI();
    }

    hueSlider.addEventListener('input', updateColorFromSlider);

    let isDragging = false;

    const handleStart = (e) => {
        isDragging = true;
        handleMove(e);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        if (e.cancelable) e.preventDefault();

        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        // 终极兼容性跨浏览器坐标计算法：抛弃对绝对像素的依赖
        // rect.width / rect.height 是经过屏幕变换（Scale 缩放等）后的实际物理框。
        // 而 clientX/clientY 也是在屏幕坐标系中。
        // 通过直接相减除以它的实际大小，得出鼠标在画布上的精确百分比（0.0 ~ 1.0）
        const ratioX = (clientX - rect.left) / (rect.width || 1);
        const ratioY = (clientY - rect.top) / (rect.height || 1);

        // 再乘回原始 DOM 逻辑坐标（因为 cursor 的 left 和 top 是相对于容器逻辑 offsetWidth 而言的）
        const x = ratioX * (canvas.offsetWidth || 1);
        const y = ratioY * (canvas.offsetHeight || 1);

        updateHSLFromPosition(x, y);
    };

    const handleEnd = () => {
        isDragging = false;
    };

    paletteArea.addEventListener('mousedown', handleStart);
    // Attach move/end to window to handle drag-out
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    paletteArea.addEventListener('touchstart', handleStart);
    // Allow page scroll unless dragging palette
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    nextBtn.addEventListener('click', () => {
        // 重要：切换题目时彻底移除 window 级别的监听器，防止内存泄漏和坐标干扰
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleEnd);

        colorData[emotionKey] = {
            ...currentHSL,
            hex: hslToHex(currentHSL.h, currentHSL.s, currentHSL.l)
        };
        currentHSL = { h: 180, s: 50, l: 50 };

        if (currentStep === EMOTION_KEYS.length) {
            submitPhase1(t);
        } else {
            currentStep++;
            renderStep();
        }
    });


}

function renderGEWIntro(t) {
    // 初始化为空，而不是预设错误项
    currentGEWSelection = {};

    mainContent.innerHTML = `
        <div class="card" style="text-align: center; max-width: 800px; margin: 0 auto;">
            <h2>${t.phase2Title}</h2>
            <p style="margin: 20px 0; line-height: 1.6; font-size: 1.1rem; color: #333;">${t.phase2Desc}</p>
            <p style="margin: 20px 0; line-height: 1.6; font-size: 1rem; color: #555;">${t.phase2NoteExample}</p>
            
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 2rem; text-align: left;">
                <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin: 10px 0 20px 0;">
                    <div style="text-align: right; color: #666; font-size: 0.9rem;">${currentLang === 'en' ? 'Low Intensity' : '情绪弱'}</div>
                    <!-- 模拟一排不同大小的圆圈 -->
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; border: 1.5px solid black; background: white;"></div>
                        <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid black; background: white;"></div>
                        <div style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid black; background: white;"></div>
                        <div style="width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid black; background: white;"></div>
                        <div style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid black; background: black;"></div>
                    </div>
                    <div style="text-align: left; color: #666; font-size: 0.9rem;">${currentLang === 'en' ? 'High Intensity' : '情绪强'}</div>
                </div>
                
                <p style="text-align: center; margin: 15px 0 0 0; color: #555;">
                    ${currentLang === 'en' ? 'If none match, select "No emotion" or "Different emotion."' : '如果没有匹配的，请选择“没有情绪”或“其他情绪”。'}
                </p>
                <p style="text-align: center; margin: 15px 0 0 0; font-weight: bold; color: #333;">
                    ${currentLang === 'en' ? 'Click Start Phase 2 when you are ready.' : '准备好后请点击开始第二阶段。'}
                </p>
            </div>

            <button class="btn primary-btn" style="margin-top: 1rem;" onclick="startPhase2()">${t.gewStart}</button>
        </div>
    `;
}

window.startPhase2 = () => {
    randomizedWordKeys = shuffleArray(WORD_KEYS);
    currentStep++;
    renderStep();
};

let currentGEWSelection = {}; // Store selection for current word: { 'anger': 5, 'joy': 2 }

function renderGEWTrial(word, t) {
    currentGEWSelection = {}; // Reset for new word

    // Restore if exists
    if (wordData[word]) {
        wordData[word].forEach(item => {
            if (item.emotion === 'None') {
                currentGEWSelection['NO_EMOTION'] = 0;
            } else if (item.emotion === 'Other') {
                currentGEWSelection['OTHER'] = item.note;
            } else {
                currentGEWSelection[item.emotion] = item.intensity;
            }
        });
    }

    const colorBlock = `<span style="display:inline-block; width: 75px; height: 75px; flex-shrink: 0; border-radius: 50%; background-color: ${WORD_COLORS[word]}; vertical-align: middle; margin: 0 16px; border: 1px solid #ccc;"></span>`;

    // 针对移动端，使用更小的字体并在 colorBlock 前后换行
    const isMobileUI = window.innerWidth < 600;
    const titleStyles = isMobileUI 
        ? "margin-bottom: 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 1.9rem; font-weight: normal; gap: 10px;" // column + smaller font
        : "margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: normal; white-space: nowrap;";

    mainContent.innerHTML = `
        <div class="card" style="text-align: center; max-width: 950px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
            <h2 style="${titleStyles}">${t.gewInstruction(colorBlock)}</h2>
            
            <div id="gew-container" style="margin: 0 auto; position: relative; display: flex; justify-content: center;">
                <!-- SVG Wrapper -->
            </div>

            <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
                <button id="gewBackBtn" class="btn secondary-btn">${t.back || 'Back'}</button>
                <button id="gewNextBtn" class="btn primary-btn">${t.gewNext}</button>
            </div>
        </div>
    `;

    // Render the Wheel
    renderGEWChart(t);

    document.getElementById('gewBackBtn').addEventListener('click', () => {
        currentStep--;
        renderStep();
    });

    document.getElementById('gewNextBtn').addEventListener('click', () => {
        // Validation: Must select at least one emotion
        if (Object.keys(currentGEWSelection).length === 0) {
            showToast(t.errorRequired || 'Please make a selection');
            return;
        }

        // Collect Data
        // Collect Data
        // Convert selection map to array
        const selectionList = Object.entries(currentGEWSelection).map(([e, i]) => {
            if (e === 'OTHER') {
                return { emotion: 'Other', intensity: 0, note: i }; // i is string value
            }
            if (e === 'NO_EMOTION') {
                return { emotion: 'None', intensity: 0 };
            }
            return { emotion: e, intensity: i };
        });

        wordData[word] = selectionList;

        const PHASE2_END = EMOTION_KEYS.length + 1 + WORD_KEYS.length;
        if (currentStep >= PHASE2_END) {
            submitPhase2(t);
        } else {
            currentStep++;
            renderStep();
        }
    });
}

// Draw the Geneva Emotion Wheel with SVG
function renderGEWChart(t) {
    const container = document.getElementById('gew-container');
    // 判断是否为移动端
    const isMobile = window.innerWidth < 600;

    // 增大整体 SVG 的画幅大小，确保边缘的字不会被截断
    const size = Math.min(window.innerWidth - 10, 750); // 稍微增加画布允许的极限
    const center = size / 2;
    // Layout Config: 动态调整内外圈半径
    const innerRadius = isMobile ? 45 : 70; 
    // 将移动端 outerRadius 继续放大，从 (size / 2 - 60) 改为 (size / 2 - 40)
    const outerRadius = isMobile ? (size / 2 - 40) : (size / 2 - 130);

    // Create UI Structure
    container.innerHTML = ''; // Clear
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;

    // SVG Layer
    // ...
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.style.userSelect = 'none';
    // 增加 overflow: visible 以防止极少数情况下边缘文字被框截断
    svg.style.overflow = 'visible';

    // 20 Emotions Distributed Evenly
    const angleStep = 360 / GEW_EMOTION_KEYS.length;

    GEW_EMOTION_KEYS.forEach((key, index) => {
        // emotionName preparation moved to inside label logic
        const angle = -90 + 9 + (index * angleStep);
        const radian = (angle * Math.PI) / 180;

        // Draw 5 circles
        for (let i = 1; i <= 5; i++) {
            const stepSize = (outerRadius - innerRadius) / 5;
            const dist = innerRadius + (i - 0.5) * stepSize;

            const cx = center + dist * Math.cos(radian);
            const cy = center + dist * Math.sin(radian);
            const circleRadius = 3 + i * 1.8;

            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", isMobile ? (circleRadius * 0.8) : circleRadius); // 移动端稍微缩小圆圈
            circle.setAttribute("fill", "white"); // Default
            circle.setAttribute("stroke", "black");
            circle.setAttribute("stroke-width", "1.5");
            circle.style.cursor = "pointer";
            circle.dataset.emotion = key;
            circle.dataset.intensity = i;

            const handler = (e) => {
                e.preventDefault();
                toggleGEWSelection(key, i, svg);
            };
            circle.addEventListener('mousedown', handler);
            circle.addEventListener('touchstart', handler);

            svg.appendChild(circle);
        }

        // Labels
        // 增加 labelDist 的偏移量，防大大字体和最外圈的圆圈重叠。移动端空间小，拉近到极限（如 18）。
        // 因为前面放大了外轮，这里的附加偏移要稍微紧凑点以防飞出。
        const labelDist = outerRadius + (isMobile ? 18 : 65);
        const lx = center + labelDist * Math.cos(radian);
        const ly = center + labelDist * Math.sin(radian);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", lx);
        text.setAttribute("y", ly);
        text.setAttribute("text-anchor", "middle");
        // 最极限再次调大字体并加粗，移动端使用较小字体
        text.setAttribute("font-size", isMobile ? "9.5" : "18");
        text.setAttribute("font-weight", isMobile ? "700" : "900");
        
        // 关键修复：防止长文本在移动端覆盖圆圈阻挡点击事件
        text.style.pointerEvents = "none";

        if (currentGroup === 'CN') {
            let en = i18n.en.gewEmotions[key];
            const zh = i18n.zh.gewEmotions[key];

            // Allow vertical centering behavior roughly
            text.setAttribute("dominant-baseline", "middle");

            // For very long English words, split them to two lines in Mobile view
            if (isMobile && (key === 'disappointment' || key === 'contentment')) {
                const parts = key === 'disappointment' ? ['Disappoint-', 'ment'] : ['Content-', 'ment'];
                
                const tspanEn1 = document.createElementNS(svgNS, "tspan");
                tspanEn1.textContent = parts[0];
                tspanEn1.setAttribute("x", lx);
                tspanEn1.setAttribute("dy", "-1.0em");

                const tspanEn2 = document.createElementNS(svgNS, "tspan");
                tspanEn2.textContent = parts[1];
                tspanEn2.setAttribute("x", lx);
                tspanEn2.setAttribute("dy", "1.1em"); // relative to line 1

                const tspanZh = document.createElementNS(svgNS, "tspan");
                tspanZh.textContent = zh;
                tspanZh.setAttribute("x", lx);
                tspanZh.setAttribute("dy", "1.1em"); // relative to line 2

                text.appendChild(tspanEn1);
                text.appendChild(tspanEn2);
                text.appendChild(tspanZh);
            } else {
                const tspanEn = document.createElementNS(svgNS, "tspan");
                tspanEn.textContent = en;
                tspanEn.setAttribute("x", lx);
                tspanEn.setAttribute("dy", isMobile ? "-0.2em" : "-0.5em");

                const tspanZh = document.createElementNS(svgNS, "tspan");
                tspanZh.textContent = zh;
                tspanZh.setAttribute("x", lx);
                tspanZh.setAttribute("dy", isMobile ? "1.0em" : "1.2em");

                text.appendChild(tspanEn);
                text.appendChild(tspanZh);
            }
        } else {
            text.setAttribute("dominant-baseline", "middle");
            let en = t.gewEmotions[key];
            
            // Non-CN groups, also split long words manually for mobile
            if (isMobile && (key === 'disappointment' || key === 'contentment')) {
                const parts = key === 'disappointment' ? ['Disappoint-', 'ment'] : ['Content-', 'ment'];
                
                const tspanEn1 = document.createElementNS(svgNS, "tspan");
                tspanEn1.textContent = parts[0];
                tspanEn1.setAttribute("x", lx);
                tspanEn1.setAttribute("dy", "-0.6em");

                const tspanEn2 = document.createElementNS(svgNS, "tspan");
                tspanEn2.textContent = parts[1];
                tspanEn2.setAttribute("x", lx);
                tspanEn2.setAttribute("dy", "1.2em");

                text.appendChild(tspanEn1);
                text.appendChild(tspanEn2);
            } else {
                text.textContent = en;
            }
        }

        svg.appendChild(text);
    });

    container.appendChild(svg);

    // Add Central Buttons (HTML Overlay for better styling)
    const centerDiv = document.createElement('div');
    centerDiv.style.position = 'absolute';
    centerDiv.style.top = '50%';
    centerDiv.style.left = '50%';
    centerDiv.style.transform = 'translate(-50%, -50%)';
    centerDiv.style.width = `${innerRadius * 1.6}px`;
    centerDiv.style.height = `${innerRadius * 1.6}px`; // Square-ish fits in circle? 
    // Actually standard GEW has a square hub.
    centerDiv.style.display = 'flex';
    centerDiv.style.flexDirection = 'column';
    centerDiv.style.justifyContent = 'center';
    centerDiv.style.alignItems = 'center';
    centerDiv.style.gap = '8px';
    centerDiv.style.zIndex = '10';

    // Button 1: No Emotion
    const btnNo = document.createElement('button');
    btnNo.textContent = t.noEmotion;
    btnNo.style.fontSize = isMobile ? '10px' : '12px';
    btnNo.style.padding = isMobile ? '2px 4px' : '4px 8px';
    btnNo.style.cursor = 'pointer';
    btnNo.style.background = '#f0f0f0';
    btnNo.style.border = '1px solid #999';
    btnNo.style.borderRadius = '4px';
    btnNo.onclick = () => {
        currentGEWSelection = { 'NO_EMOTION': 0 };
        updateGEWVisuals(svg, centerDiv);
    };

    // Button 2: Different Emotion
    const btnOther = document.createElement('button');
    btnOther.id = 'gew-other-btn'; // Add ID for easier selection
    btnOther.textContent = t.differentEmotion;
    btnOther.style.fontSize = isMobile ? '10px' : '12px';
    btnOther.style.padding = isMobile ? '2px 4px' : '4px 8px';
    btnOther.style.cursor = 'pointer';
    btnOther.style.background = '#f0f0f0';
    btnOther.style.border = '1px solid #999';
    btnOther.style.borderRadius = '4px';

    // New In-page Input Logic
    btnOther.onclick = () => {
        // Toggle input mode
        renderGEWOtherInput(svg, centerDiv, t);
    };

    centerDiv.appendChild(btnNo);
    centerDiv.appendChild(btnOther);
    container.appendChild(centerDiv);

    // Initial Visual Update
    updateGEWVisuals(svg, centerDiv);
}

// Sub-function to render the input UI inside the center
function renderGEWOtherInput(svg, centerDiv, t) {
    centerDiv.innerHTML = ''; // Clear current buttons

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = t.enterEmotion;
    input.style.width = '90%';
    input.style.padding = '4px';
    input.style.fontSize = '12px';
    input.style.marginBottom = '5px';
    input.id = 'gew-custom-input';

    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '5px';

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'OK';
    confirmBtn.style.padding = '4px 8px';
    confirmBtn.style.fontSize = '11px';
    confirmBtn.onclick = () => {
        const val = input.value.trim();
        if (val) {
            currentGEWSelection = {};
            currentGEWSelection['OTHER'] = val;
            // Redraw original UI
            renderGEWChartButtons(svg, centerDiv, t);
        } else {
            // Cancel if empty? Or just show original?
            renderGEWChartButtons(svg, centerDiv, t);
        }
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'X';
    cancelBtn.style.padding = '4px 8px';
    cancelBtn.style.fontSize = '11px';
    cancelBtn.onclick = () => {
        renderGEWChartButtons(svg, centerDiv, t);
    };

    btnContainer.appendChild(confirmBtn);
    btnContainer.appendChild(cancelBtn);

    centerDiv.appendChild(input);
    centerDiv.appendChild(btnContainer);

    input.focus();
}

// Helper to restore center buttons
function renderGEWChartButtons(svg, centerDiv, t) {
    centerDiv.innerHTML = '';
    const isMobile = window.innerWidth < 600;

    const btnNo = document.createElement('button');
    btnNo.textContent = t.noEmotion;
    btnNo.style.fontSize = isMobile ? '10px' : '12px';
    btnNo.style.padding = isMobile ? '2px 4px' : '4px 8px';
    btnNo.style.cursor = 'pointer';
    btnNo.style.background = '#f0f0f0';
    btnNo.style.border = '1px solid #999';
    btnNo.style.borderRadius = '4px';
    btnNo.onclick = () => {
        currentGEWSelection = { 'NO_EMOTION': 0 };
        updateGEWVisuals(svg, centerDiv);
    };

    const btnOther = document.createElement('button');
    btnOther.id = 'gew-other-btn';
    btnOther.textContent = t.differentEmotion;
    btnOther.style.fontSize = isMobile ? '10px' : '12px';
    btnOther.style.padding = isMobile ? '2px 4px' : '4px 8px';
    btnOther.style.cursor = 'pointer';
    btnOther.style.background = '#f0f0f0';
    btnOther.style.border = '1px solid #999';
    btnOther.style.borderRadius = '4px';
    btnOther.onclick = () => {
        renderGEWOtherInput(svg, centerDiv, t);
    };

    centerDiv.appendChild(btnNo);
    centerDiv.appendChild(btnOther);
    updateGEWVisuals(svg, centerDiv);
}

function toggleGEWSelection(emotion, intensity, svg) {
    // If 'OTHER' was selected, clear it.
    if (currentGEWSelection['OTHER']) {
        delete currentGEWSelection['OTHER'];
    }
    if (currentGEWSelection['NO_EMOTION'] !== undefined) {
        delete currentGEWSelection['NO_EMOTION'];
    }

    if (currentGEWSelection[emotion] === intensity) {
        delete currentGEWSelection[emotion];
    } else {
        currentGEWSelection[emotion] = intensity;
    }
    // Re-render
    const centerDiv = document.getElementById('gew-container').querySelector('div'); // Hack to find center div
    updateGEWVisuals(svg, centerDiv);
}

function updateGEWVisuals(svg, centerDiv) {
    const circles = svg.querySelectorAll('circle[data-emotion]');
    circles.forEach(c => {
        const e = c.dataset.emotion;
        const i = parseInt(c.dataset.intensity);

        if (currentGEWSelection[e] === i) {
            c.setAttribute('fill', 'black'); // Selected
        } else {
            c.setAttribute('fill', 'white'); // Unselected
        }
    });

    // Update Different Emotion styling if active
    if (centerDiv) {
        const btns = centerDiv.querySelectorAll('button');
        const btnNo = btns[0];
        const btnOther = btns[1];

        if (currentGEWSelection['NO_EMOTION'] !== undefined) {
            btnNo.style.backgroundColor = '#333';
            btnNo.style.color = 'white';
        } else {
            btnNo.style.backgroundColor = '#f0f0f0';
            btnNo.style.color = 'black';
        }

        if (currentGEWSelection['OTHER']) {
            btnOther.style.backgroundColor = '#333';
            btnOther.style.color = 'white';
            btnOther.textContent = currentGEWSelection['OTHER']; // Show text
        } else {
            btnOther.style.backgroundColor = '#f0f0f0';
            btnOther.style.color = 'black';
            // Need to recover label text from i18n... a bit complex to pass t here.
            // Assume simplified approach: don't reset text or keep simple. 
            // Ideally we pass 't' or store original text.
            // Simplification: Not changing text back, just style.
            // Actually, let's reset text if possible.
            // check global i18n
            const t = i18n[currentLang];
            btnOther.textContent = t.differentEmotion;
        }
    }
}


async function saveWithRetry(responseObj, maxRetries = 3) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return await responseObj.save();
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) throw error;
            // 指数退避算法: 等待时间随重试次数递增 (带 Jitter 防止并发聚集)
            const waitTime = Math.pow(2, attempts - 1) * 1000 + Math.random() * 500;
            console.warn(`LeanCloud save failed, retrying in ${Math.round(waitTime)}ms... (Attempt ${attempts} of ${maxRetries})`, error);
            await new Promise(r => setTimeout(r, waitTime));
        }
    }
}

async function submitPhase1(t) {
    // 【终极极简模式】：阶段一只展示加载动画和跳转，不消耗 LeanCloud 请求，统合到终局提交
    mainContent.innerHTML = `<div class="card" style="text-align:center;"><p>${t.submitting}</p></div>`;
    
    // 让提交界面稍微闪现一下，提升用户过渡体验
    setTimeout(() => {
        currentStep++;
        renderStep();
    }, 400); 
}

async function submitPhase2(t) {
    mainContent.innerHTML = `<div class="card" style="text-align:center;"><p>${t.submitting}</p></div>`;

    let className = 'SurveyResponse';
        if (currentGroup && ['CN', 'UK', 'US', 'BW'].includes(currentGroup)) {
            className = `SurveyResponse_${currentGroup}222`;
        }

    try {
        // 创建全新的答卷数据包
        const SurveyResponse = AV.Object.extend(className);
        const response = new SurveyResponse();
        
        const endTime = Date.now();
        const totalDuration = Math.round((endTime - startTime) / 1000);

        // 将内存中保存的所有（阶段一 + 阶段二）数据完整打包赋给新记录
        response.set('user_info', userInfo);
        response.set('color_data', colorData);
        response.set('duration', totalDuration); 
        response.set('group', currentGroup);
        response.set('display_info', displayInfo);
        response.set('word_data', wordData);
        response.set('completed_phase2', true); // 证明这是一条做完全部阶段的终极数据

        // 使用指数退避的防洪峰重拾机制连试 4 次，确保最稳当交卷
        await saveWithRetry(response, 4);

        // 全部搞定，彻底完成实验
        currentStep++; 
        renderStep();
    } catch (e) {
        console.error('Final submit error:', e);
        showToast(t.errorSubmit + ' (Final): ' + (e.message || t.errorNetwork));
        currentStep = 999;
        renderStep();
    }
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function renderThankYou(t) {
    let karmaHtml = '';
    if (currentStep !== 999) {
        karmaHtml = `
            <div style="margin-top: 2rem; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1.5rem; border-radius: 8px; text-align: left;">
                <p style="color: #166534; font-weight: 500; margin-bottom: 0.5rem;">
                    The following code gives you Karma that can be used to get free research participants at SurveySwap.io.
                </p>
                <p style="margin-bottom: 0.5rem;">
                    Go to: <a href="https://surveyswap.io/sr/LETA-H5VK-CJY8" target="_blank" style="color: #2563eb; text-decoration: underline;">https://surveyswap.io/sr/LETA-H5VK-CJY8</a>
                </p>
                <p style="color: #475569; font-size: 0.9rem;">
                    Or, alternatively, enter the code manually: <strong>LETA-H5VK-CJY8</strong>
                </p>
            </div>
        `;
    }

    const titleText = currentStep === 999 ? (currentLang === 'en' ? 'This test has ended. We are sorry, but you are not the tester we need.' : '本次测试结束，很抱歉您不是我们需要的测试者。') : t.thankYou;
    const descText = currentStep === 999 ? '' : t.thankYouDesc;

    mainContent.innerHTML = `
        <div class="card" style="text-align: center;">
            <h2>${titleText}</h2>
            ${descText ? `<p>${descText}</p>` : ''}
            ${karmaHtml}
            <p style="margin-top: 2.5rem; color: #718096; font-size: 0.95rem;">${currentLang === 'en' ? 'Press ESC to exit full screen.' : '按 ESC 退出全屏'}</p>
        </div>
    `;
}
