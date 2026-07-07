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
            <h3>Conway’s Premium Steak</h3>
            <p>The fierce interaction of fire and aged Ribeye. The truffle butter here is not a chef's choice, but the singular, harmonious resolution towards which this cut of beef has always gravitated.</p>
        </div>
        
        <div class="menu-item">
            <h3>Seared Salmon with Citrus Reduction</h3>
            <p>The ancient movement of ocean currents and the slow ripening of grapefruit beneath the sun meet upon a bed of wild rice. A dish whose architecture was written into the laws of nature long ago.</p>
        </div>
        
        <div class="menu-item">
            <h3>"Hand-Crafted" Wild Mushroom Pasta</h3>
            <p>House-made tagliatelle that has absorbed the quiet energy of the forest through a rich, velvety sauce. A flavor profile impossible to alter or forget.</p>
        </div>
    </div>

    <div class="menu-category">
        <h2> Elements of Equilibrium (Appetizers & Salads)</h2>
        
        <div class="menu-item">
            <h3>Caramelized Pear & Dourblu Salad</h3>
            <p>Opposites condemned to unity. The crisp sweetness of pear and the sharp bite of blue cheese balance one another as irrevocably as night succeeds day.</p>
        </div>
        
        <div class="menu-item">
            <h3>Stracciatella Bruschetta</h3>
            <p>The crunch of toasted baguette yields to the pressure of the knife, releasing a pre-destined harmony of creamy stracciatella, sun-dried tomatoes, and basil. The physics of destruction for the sake of creation.</p>
        </div>
    </div>

    <div class="menu-category">
        <h2> The Sweet Entropy (Desserts)</h2>
        
        <div class="menu-item">
            <h3>Signature Chocolate Fondant</h3>
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