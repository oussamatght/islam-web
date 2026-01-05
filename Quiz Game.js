    const questions = [{
        question: "ماذا تعني كلمة العقيدة؟",
        answers: [
            { text: "أ. مجموعة من القواعد والأنظمة في الإسلام", correct: false },
            { text: "ب.الاعتقاد الراسخ الذي يستقر في القلب دون شكٍّ أو تردد", correct: true },
            { text: "ج. نوعٌ من الصلاة في الإسلام", correct: false },
            { text: "د. شكلٌ من أشكال الحج", correct: false },
        ]
    }, {
        question: "من خلقنا ولماذا؟",
        answers: [
            { text: "أ. خلقنا الله لعبادته فقط", correct: true },
            { text: "ب. خلقنا ليكون لنا سلطان على الأرض", correct: false },
            { text: "ج. خلقنا ليكون كلُّنا ملائكةً", correct: false },
            { text: "د. خلقنا لتحصيل العلم فقط", correct: false },
        ]

    }, {
        question: "ما هي كلمة التوحيد (كلمة لا إله إلا الله) وماذا تعني؟",
        answers: [
            { text: "أ. كلمةٌ لطلب الشفاعة وتعني “لا ملجأ إلا الله”", correct: false },
            { text: "ب. كلمة التوحيد وتعني “لا إله بحق إلا الله”", correct: false },
            { text: "ج. كلمة مفهومها “لا معبود بحق إلا الله”", correct: true },
            { text: "د. كلمةٌ للحث على الإحسان وتعني “لا مسلم إلا الله”", correct: false },
        ]

    }, {
        question: "كم عدد أركان الإيمان؟",
        answers: [
            { text: "أ. 5", correct: false },
            { text: "ب. 6", correct: true },
            { text: "ج. 7", correct: false },
            { text: "د. 8", correct: false },
        ]

    }, {
        question: "ما هي أنواع التوحيد الثلاثة؟",
        answers: [
            { text: "أ. توحيد الربوبية، توحيد الألوهية، توحيد الأسماء والصفات", correct: true },
            { text: "ب. توحيد الأسماء، توحيد المعاني، توحيد العبادة", correct: false },
            { text: "ج. توحيد القبلة، توحيد الصلاة، توحيد الصوم", correct: false },
            { text: "د. توحيد الشهادة، توحيد الزكاة، توحيد الصدقة", correct: false },
        ]

    }, {
        question: "ما هي الشروط الستة قبل دخول الصلاة؟",
        answers: [{
                text: "أ. الطهارة، ستر العورة، التوجه إلى القبلة، وقت الصلاة، النية، تكبيرة الإحرام",
                correct: true
            },
            {
                text: "ب. الأذان، الإقامة، الدعاء، الصلاة المفروضة، العمل الصالح، التوبة  ",
                correct: false
            },
            { text: "ج. الوضوء، غسل الجنابة، غسل الجمعة، التيمم، التطوع، الصيام", correct: false },
            { text: "د. الترجمة، القراءة، التسبيح، الاستغفار، الشهادة، الولاية", correct: false },
        ]

    }, {
        question: "ما هو علم أصول الفقه؟",
        answers: [
            { text: "أ. علمٌ يدرس قواعد الاستدلال على أحكام الشريعة", correct: true },
            { text: "ب. علمٌ يدرس تاريخ حياة الفقهاء", correct: false },
            { text: "ج. علمٌ يختص بأسماء الفقهاء ومآخذهم", correct: false },
            { text: "د. علمٌ يدرس أحوال الفقه في الغرب", correct: false },
        ]

    }, {
        question: "إلى كم فترة يُقسم تاريخ الفقه الإسلامي؟",
        answers: [
            { text: "أ. خمس فترات", correct: false },
            { text: "ب. ست فترات", correct: false },
            { text: "ج. سبع فترات", correct: false },

            { text: "د. ثماني فترات", correct: true },
        ]

    }, {
        question: "ماذا قال النبي ﷺ: “إن بين الرجل وبين الشرك والكفر…”؟",
        answers: [
            { text: "أ. “ترك الصلاة بعد وقتها”", correct: true },
            { text: "ب. “الرياء في العبادة”", correct: false },
            { text: "ج. “الأكل بشماله”", correct: false },
            { text: "د. “التحدث في النهار”", correct: false },
        ]

    }, {
        question: "ما الذي يحظر على الشخص وهو في حالة جنابة؟",
        answers: [
            { text: "أ. الصلاة", correct: false },
            { text: "ب. الصيام", correct: false },
            { text: "ج. قراءة القرآن", correct: false },
            { text: "د. جميع ما ذكر", correct: true },
        ]

    }, {
        question: "ما هو تعريف الحديث؟",
        answers: [
            { text: "أ. القرآن الكريم", correct: false },
            { text: "ب. كلام الرسول ﷺ المنقول عن طرقٍ صحيحة أو ضعيفة", correct: true },
            { text: "ج. أقوال الصحابة فقط", correct: false },
            { text: "د. سنة الخلفاء الراشدين", correct: false },
        ]

    }, {
        question: "ما العلاقة بين الشريعة والحديث؟",
        answers: [
            { text: "أ. الأحاديث لا تؤخذ بعين الاعتبار في استنباط الشريعة", correct: false },
            { text: "ب. الشريعة والأحاديث مستقلتان تمامًا", correct: false },
            { text: "ج. معظم أحكام الشريعة مأخوذة من الأحاديث", correct: true },
            { text: "د. الشريعة مشتقة فقط من القرآن", correct: false },
        ]

    }, {
        question: "ما هما وجهان الحديث؟",
        answers: [
            { text: "أ. المتن والإسناد", correct: true },
            { text: "ب. الاسم والوصف", correct: false },
            { text: "ج. الكتابة والتلاوة", correct: false },
            { text: "د. الفقه والتوحيد", correct: false },
        ]

    }, {
        question: "ما الفرق بين الحديث القدسي والحديث الشريف؟",
        answers: [
            { text: "أ. الحديث القدسي من كلام الله وروحه فأما الشريف فهو من كلام النبي ﷺ", correct: true },
            { text: "ب. لا فرق بينهما", correct: false },
            { text: "ج. القدسي فقط للأحكام الشرعية والشريف للعقيدة", correct: false },
            { text: "د. الشريف أقدم من القدسي", correct: false },
        ]

    }, {
        question: "ما هي الفئات التي يصنف فيها الحديث؟",
        answers: [
            { text: "أ. فلسفي، علمي، تاريخي", correct: false },
            { text: "ب. صحيح، حسن، ضعيف", correct: true },
            { text: "ج. قرآني، نبوي، صحابي", correct: false },
            { text: "د. مدني، مكي، مدني مكي", correct: false },
        ]

    }]


    const questionEl = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    let score = 0;

    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.dataset.theme =
            document.body.dataset.theme === "dark" ? "laight" : "dark";
        localStorage.setItem("theme", document.body.dataset.theme);
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) document.body.dataset.theme = savedTheme;

    function startQuiz() {
        currentIndex = 0;
        score = 0;
        nextBtn.innerText = "التالي";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let current = questions[currentIndex];
        questionEl.textContent = current.question;

        current.answers.forEach((answer) => {
            const btn = document.createElement("div");
            btn.textContent = answer.text;
            btn.classList.add("option");
            if (answer.correct) btn.dataset.correct = "true";
            btn.addEventListener("click", selectAnswer);
            optionsContainer.appendChild(btn);
        });
    }

    function resetState() {
        nextBtn.style.display = "none";
        optionsContainer.innerHTML = "";
    }

    function selectAnswer(e) {
        const selected = e.target;
        const correct = selected.dataset.correct === "true";

        Array.from(optionsContainer.children).forEach((btn) => {
            btn.classList.add("disabled");
            if (btn.dataset.correct === "true") {
                btn.classList.add("correct");
            } else {
                btn.classList.add("wrong");
            }
        });

        if (correct) score++;

        nextBtn.style.display = "inline-block";
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    function showResult() {
        resetState();
        questionEl.textContent = `انتهى الاختبار! نتيجتك: ${score} من ${questions.length}`;
        nextBtn.textContent = "إعادة المحاولة";
        nextBtn.style.display = "inline-block";
        nextBtn.addEventListener("click", startQuiz, { once: true });
    }

    startQuiz();


  

