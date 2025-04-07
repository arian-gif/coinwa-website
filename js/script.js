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
                    <p class="testimonial-text">"CoinWa makes learning about money so much fun! The lessons are interactive, and I actually enjoy leveling up while improving my financial skills."</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"The leaderboard and streak challenges make it exciting to compete with my friends. It’s cool to see who can level up and collect the most badges the fastest!"</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"The gamified lessons keep me coming back every day. Earning streaks and trophies makes learning feel like a challenge I want to win!"</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="testimonial">
                    <p class="testimonial-text">"The app design is super clean and modern. Everything feels smooth, and I love the animations when I unlock new achievements!"</p>
                    <div class="testimonial-author">
                        <div class="author-info">
                            <div class="author-verified">
                                <img src="https://ext.same-assets.com/3486128480/1248550479.svg" alt="Verified">
                                <span>Verified</span>
                            </div>
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
                <p class="rating-text"> 4.35 stars from our testing!</p>
                <p class="rating-subtext">People love CoinWa's gamified approach to learning</p>
                <div class="app-ratings">
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
                        <h3>Who is CoinWa for?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>CoinWa is designed for teens (13–18) and their parents who want to build strong money habits early on. It’s also a great tool for schools looking to integrate financial literacy into their curriculum.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Can I use CoinWa for free?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Yes! Right now CoinWa is completely free and includes access to all the features, like gamified lessons, challenges, and the ability to track your progress. It's a great way to start learning about money management in a fun and interactive way!</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How do the lessons work?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>At CoinWa, we use interactive lessons and games to teach kids how to make smart financial decisions. Each lesson is designed to engage users through fun challenges, quizzes, and real-world scenarios that help them understand key financial concepts. With every game and activity, users develop the skills they need to make informed decisions about money, setting them up for success in the real world.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>When is CoinWa launching?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>We’re launching our MVP in Spring 2025! Stay tuned for any updates and be the first to try it as soon as its out!</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How does CoinWa help with Ontario’s new Grade 10 financial literacy exam?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>CoinWa is aligned with key financial literacy concepts and helps students learn through practical, stress-free methods that reinforce what they’ll need to know for the exam.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Is CoinWa safe for kids to use?</h3>
                        <span class="toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Yes! CoinWa is designed with teen safety and privacy in mind. We do not collect unnecessary data and provide a secure learning environment.</p>
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
