function loadContentHomePage(){
    const root = document.getElementById("content");
    root.textContent = "";
    const description = document.createElement("div");
    description.className = "Home_page";
    description.innerHTML = `<h1 class="restaurant-title">Conway’s Restaurant: A Convergence Foretold</h1>
    <p class="subtitle"><em>You are not here by chance. Every choice has already been made.</em></p>
    
    <div class="page-content">
        <p>In the seemingly chaotic yet stringently ordered fabric of existence, there is no room for coincidence. Your arrival on this page, much like the precise hunger you feel at this very moment, is the inevitable climax of a complex chain of cause and effect - a causal web weaving its way through eons and generations just to lead you here.</p>
        
        <p><strong>Conway’s</strong> is not merely a venue for dining. It is a predetermined coordinate in spacetime where the trajectory of your day collides with the absolute trajectory of our culinary design. We do not create flavor; we simply allow the laws of physics and nature to manifest on your plate in their highest, most unalterable form.</p>
        
        <blockquote class="determinism-quote">
            <em>Your table has been waiting for you since the dawn of time. Claim it now, and fulfill what must come to pass.</em>
        </blockquote>
    </div>`;

    root.appendChild(description);
};

function loadContentMenuPage(){
    const root = document.getElementById("content");
    root.textContent = "";
    const menuList = document.createElement("div");
    menuList.className = "Menu_page";
    menuList.innerHTML = `<h1 class="menu-title">The Manifesto of Cause and Effect</h1>
    <p class="subtitle"><em>Taste as an inevitability, carved by time.</em></p>

    <div class="menu-category">
        <h2> Prime Consequences (Entrées)</h2>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="steak">Conway’s Premium Steak</h3>
            <p>The fierce interaction of fire and aged Ribeye. The truffle butter here is not a chef's choice, but the singular, harmonious resolution towards which this cut of beef has always gravitated.</p>
        </div>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="pizza">The Cosmic Pizza Grid</h3>
            <p>A perfectly synchronized matrix of melted mozzarella and rich tomato reduction. Each slice obeys the absolute laws of culinary geometry, where toppings expand or collapse in flawless symmetry.</p>
        </div>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="burger">The Gravity Burger</h3>
            <p>A towering collision of a flame-grilled beef patty and sharp cheddar. Bound by an inescapable culinary attraction between two brioche buns, creating a flavor profile impossible to alter.</p>
        </div>
    </div>

    <div class="menu-category">
        <h2> Elements of Equilibrium (Appetizers & Salads)</h2>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="hotdog">The Linear Hot Dog</h3>
            <p>An elegant, straightforward vector of flavor. The precise alignment of a premium grilled sausage nestled inside a warm bun, drizzled with a mathematically perfect wave of mustard.</p>
        </div>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="cuptea">A Cup of Infinite Tea</h3>
            <p>The gentle, irreversible diffusion of dried leaves into boiling water. A quiet state of liquid equilibrium that captures the passing of time within a single warm porcelain vessel.</p>
        </div>
    </div>

    <div class="menu-category">
        <h2> The Sweet Entropy (Desserts)</h2>
        
        <div class="menu-item">
            <h3 class ="Hdish" id="chocolate">Signature Chocolate Fondant</h3>
            <p>A warm, liquid core that obeys the absolute law of gravity, flowing outward the exact millisecond your spoon breaks the surface. Perfect thermodynamic sweetness.</p>
        </div>
    </div>`;
    root.appendChild(menuList);
}

function loadContentAboutPage(){
    const root = document.getElementById("content");
    root.textContent = "";
    const About = document.createElement("div");
    About.className = "about_page";
    About.innerHTML = `<h1 class="about-title">Our Inevitability</h1>
    
    <div class="page-content">
        <p>The story of <strong>Conway’s Restaurant</strong> is not a series of lucky breaks or happy accidents. It is the unfolding of a single, rigorously defined script. Every recipe our chef brought back from years of traveling across Europe, every footstep of our staff, and every design choice in our dining room is the result of the unyielding evolution of our culinary universe.</p>
        
        <p>We do not believe in "inspiration" or "luck." We believe in precision, alignment, and the certainty of chemical reactions that trigger the sensation of fulfillment within you. Conway’s exists because it could not <em>not</em> exist. And you will walk through our doors because the entirety of your life's momentum is pulling you toward them.</p>
        
        <p class="closing-statement"><em>The space is set. The time is fixed. Welcome to your next necessary step.</em></p>
    </div>`
    root.appendChild(About);
}

export {loadContentHomePage, loadContentMenuPage, loadContentAboutPage};