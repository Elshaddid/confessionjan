document.addEventListener('DOMContentLoaded', function () {
    const questions = {
        god: [
            'Have you neglected prayer or the sacraments?',
            'Have you used the Lord\'s name in vain?',
            'Have you missed Mass on Sunday or holy days of obligation?'
        ],
        neighbor: [
            'Have you lied or gossiped about others?',
            'Have you been unkind or unfair to others?',
            'Have you stolen or cheated?'
        ],
        myself: [
            'Have you neglected your health or well-being?',
            'Have you indulged in sinful thoughts or behaviors?',
            'Have you failed to seek self-improvement or growth?'
        ]
    };

    let currentQuestionIndex = 0;
    let currentSection = '';
    const answers = [];

    const questionSection = document.getElementById('questionSection');

    window.showSection = function (section) {
        currentSection = section;
        currentQuestionIndex = 0;
        answers.length = 0; // Clear previous answers
        questionSection.style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex < questions[currentSection].length) {
            questionSection.innerHTML = `
                <h2>${currentSection.replace(/^\w/, c => c.toUpperCase())}</h2>
                <div class="question">
                    <label>${questions[currentSection][currentQuestionIndex]}</label>
                    <button type="button" onclick="answerQuestion('Yes')">Yes</button>
                    <button type="button" onclick="answerQuestion('No')">No</button>
                </div>
            `;
        } else {
            showResults();
        }
    }

    window.answerQuestion = function (answer) {
        answers.push({ question: questions[currentSection][currentQuestionIndex], answer: answer });
        currentQuestionIndex++;
        showQuestion();
    }

    function showResults() {
        questionSection.style.display = 'none';
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<h2>Your Confession:</h2>';
        answers.forEach(answer => {
            const p = document.createElement('p');
            p.textContent = `${answer.question}: ${answer.answer}`;
            resultDiv.appendChild(p);
        });
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const prayers = {
        repentance: {
            title: 'Prayer for Repentance',
            text: 'Lord, have mercy on me, a sinner. Help me to confess my sins and to amend my life...'
        },
        beforeConfession: {
            title: 'Prayer Before Confession',
            text: 'God of mercy, I confess my sinfulness and ask for your forgiveness...'
        },
        afterConfession: {
            title: 'Prayer After Confession',
            text: 'Thank you, Lord, for your mercy and forgiveness. Help me to live a renewed life...'
        },
        psalm50: {
            title: 'Psalm 50 (51)',
            text: 'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions...'
        },
        psalm6: {
            title: 'Psalm 6',
            text: 'O Lord, do not rebuke me in your anger, nor discipline me in your wrath...'
        },
        psalm31: {
            title: 'Psalm 31 (32)',
            text: 'Blessed is the one whose transgression is forgiven, whose sin is covered...'
        },
        psalm37: {
            title: 'Psalm 37 (38)',
            text: 'O Lord, rebuke me not in your anger, nor discipline me in your wrath...'
        },
        psalm102: {
            title: 'Psalm 102 (103)',
            text: 'Bless the Lord, O my soul, and all that is within me, bless his holy name...'
        },
        psalm142: {
            title: 'Psalm 142 (143)',
            text: 'Hear my prayer, O Lord; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness...'
        }
    };

    window.togglePrayer = function (prayer) {
        const prayerContent = document.getElementById('prayerContent');
        if (prayerContent.style.display === 'block' && document.getElementById('prayerTitle').textContent === prayers[prayer].title) {
            prayerContent.style.display = 'none';
        } else {
            document.getElementById('prayerTitle').textContent = prayers[prayer].title;
            document.getElementById('prayerText').textContent = prayers[prayer].text;
            prayerContent.style.display = 'block';
        }
    };
});
