// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener for header background change
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            header.style.position = 'fixed';
            header.style.top = '0';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            header.style.position = 'absolute';
        }
    });



    // Add team features
    const teamSection = document.querySelector('.team-section .container');
    if (teamSection) {
        const teamFeaturesHTML = `
            <div class="team-features">
                <div class="team-feature">
                    <h3>Team Challenge Leaderboard</h3>
                    <div class="leaderboard">
                        <div class="leaderboard-item">
                            <span class="rank">1</span>
                            <span class="initials">SK</span>
                            <span class="name">Sarah Kim</span>
                            <span class="score">12,453 steps</span>
                        </div>
                        <div class="leaderboard-item">
                            <span class="rank">2</span>
                            <span class="initials">DC</span>
                            <span class="name">David Chen</span>
                            <span class="score">10,827 steps</span>
                        </div>
                        <div class="leaderboard-item">
                            <span class="rank">3</span>
                            <span class="initials">MG</span>
                            <span class="name">Maria Garcia</span>
                            <span class="score">9,654 steps</span>
                        </div>
                        <div class="leaderboard-item">
                            <span class="rank">4</span>
                            <span class="initials">JW</span>
                            <span class="name">James Wilson</span>
                            <span class="score">8,932 steps</span>
                        </div>
                        <div class="leaderboard-item">
                            <span class="rank">5</span>
                            <span class="initials">PP</span>
                            <span class="name">Priya Patel</span>
                            <span class="score">8,245 steps</span>
                        </div>
                    </div>
                    <div class="challenge-info">
                        <h4>Current Challenge</h4>
                        <p>Spring Wellness Sprint</p>
                        <p>3 days remaining</p>
                    </div>
                </div>
            </div>
        `;

        // Insert after the section header
        const sectionHeader = teamSection.querySelector('.section-header');
        sectionHeader.insertAdjacentHTML('afterend', teamFeaturesHTML);
    }


    // Add testimonials
    const testimonialsSection = document.querySelector('.testimonials-section .container');
    if (testimonialsSection) {
        const testimonialsHTML = `
            <div class="testimonials">
                <div class="testimonial">
                    <p class="testimonial-text">"After trying Notion templates and Trello boards for habit tracking, Hewwi's integrated approach to health, wealth, and wisdom is refreshing. The AI insights actually help me see patterns I wouldn't notice on my own."</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <h4>Jessica Chen</h4>
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                            <p>Product Manager at Dropbox</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"Most habit trackers focus on streaks, but Hewwi helps me understand why I break habits. The journal integration and AI feedback create connections between my mood, habits, and goals that other apps just can't match."</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <h4>Michael Robinson</h4>
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                            <p>Fitness Coach & Entrepreneur</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"I used to juggle between 5 different apps - one for habits, one for journaling, one for goals, etc. Hewwi brings it all together with insights across all three areas. The cross-connections between health, wealth and wisdom tracking is game-changing."</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <h4>Aisha Johnson</h4>
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                            <p>Financial Advisor</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"I've tried Habitica, Streaks, and countless other habit trackers, but they all felt like chores rather than tools for growth. Hewwi's holistic approach to balanced life development makes me actually want to use it every day."</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <h4>Carlos Martinez</h4>
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                            <p>UX Designer at Adobe</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ratings">
                <div class="star-rating">
                    <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Star">
                    <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Star">
                    <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Star">
                    <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Star">
                    <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Star">
                </div>
                <p class="rating-text">4.8 out of 5 stars from 300+ reviews</p>
                <p class="rating-subtext">People love how Hewwi transforms their daily habits</p>
                <div class="app-ratings">
                    <div class="app-rating">
                        <span>4.9 (150+ ratings)</span>
                    </div>
                    <div class="app-rating">
                        <span>4.7 (150+ ratings)</span>
                    </div>
                </div>
            </div>
        `;

        // Append testimonials after the section header
        const sectionHeader = testimonialsSection.querySelector('.section-header');
        sectionHeader.insertAdjacentHTML('afterend', testimonialsHTML);
    }

    // Add FAQ section
    const faqSection = document.querySelector('.faq-section .container');
    if (faqSection) {
        const faqsHTML = `
            <div class="faqs">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>What makes Hewwi different from other habit trackers?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Hewwi is unique in its holistic approach to tracking habits across health, wealth, and wisdom categories. Our AI-powered insights connect patterns across these three pillars of wellbeing, helping you understand how your habits interact and impact each other.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Can I use Hewwi for free?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Yes! Hewwi offers a free plan that includes essential features like basic habit tracking across health, wealth, and wisdom categories, a 7-day history view, daily journaling, and community access. This is a great way to get started with building better habits.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How does the AI coach work?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Our AI coach analyzes your habit data, journal entries, and pattern recognition to provide personalized insights and recommendations. It identifies connections between different habits, suggests improvements based on your goals, and helps you understand why certain habits are easier or harder for you to maintain.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Can I cancel my subscription anytime?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Absolutely. You can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access to your Premium features until the end of your current billing period, after which your account will revert to the free plan.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Is my data secure and private?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>We take data privacy very seriously. All your personal data is encrypted both in transit and at rest. We never sell your data to third parties and you have complete control over your information. You can export or delete your data at any time through your account settings.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>What kind of pages that my coach provides?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Our coach provides personalized insights pages including weekly habit summaries, pattern recognition, goal progress tracking, recommended habit adjustments, and connections between your health, wealth, and wisdom activities. Premium users receive more detailed analysis and action recommendations.</p>
                    </div>
                </div>
            </div>
        `;

        // Append FAQs after the section header
        const sectionHeader = faqSection.querySelector('.section-header');
        sectionHeader.insertAdjacentHTML('afterend', faqsHTML);

        // Add functionality to the FAQ toggles
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.toggle');

            // Initially hide all answers
            answer.style.display = 'none';

            question.addEventListener('click', function() {
                // Toggle the answer visibility
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    toggle.textContent = '-';
                    item.classList.add('active');
                } else {
                    answer.style.display = 'none';
                    toggle.textContent = '+';
                    item.classList.remove('active');
                }
            });
        });
    }
});
