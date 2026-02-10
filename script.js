// Indian Fitness Meal Database - High Protein Focused
const mealDatabase = [
    // Breakfast
    {
        id: 1,
        name: "Paneer Bhurji with Roti",
        category: "breakfast",
        type: "veg",
        tags: ["high-protein", "veg"],
        calories: 450,
        protein: 28,
        carbs: 35,
        fats: 22,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=80",
        ingredients: ["200g Paneer", "2 Eggs (optional)", "Onion", "Tomatoes", "Green chilies", "Whole wheat roti (2)"],
        description: "Scrambled cottage cheese with aromatic spices. Perfect muscle-building breakfast."
    },
    {
        id: 2,
        name: "Masala Oats with Sprouts",
        category: "breakfast",
        type: "veg",
        tags: ["high-fiber", "veg", "low-cal"],
        calories: 320,
        protein: 18,
        carbs: 45,
        fats: 8,
        image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Rolled oats", "Moong sprouts", "Vegetables", "Indian spices", "Turmeric"],
        description: "Fiber-rich oats cooked Indian style with protein-packed sprouts."
    },
    {
        id: 3,
        name: "Egg Bhurji Pav",
        category: "breakfast",
        type: "non-veg",
        tags: ["high-protein", "non-veg"],
        calories: 380,
        protein: 25,
        carbs: 30,
        fats: 18,
        image: "https://images.unsplash.com/photo-1525351488193-477141cb5a6e?w=800&auto=format&fit=crop&q=80",
        ingredients: ["3 Whole eggs", "Onion", "Tomatoes", "Pav buns", "Butter", "Masala"],
        description: "Mumbai street style scrambled eggs on toasted pav buns."
    },
    
    // Lunch
    {
        id: 4,
        name: "Grilled Chicken Tikka Salad",
        category: "lunch",
        type: "non-veg",
        tags: ["high-protein", "low-carb", "non-veg"],
        calories: 420,
        protein: 45,
        carbs: 12,
        fats: 20,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6f54262?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Chicken breast 200g", "Yogurt marinade", "Bell peppers", "Onion", "Mint chutney"],
        description: "Tandoori-style grilled chicken with fresh salad greens."
    },
    {
        id: 5,
        name: "Dal Makhani Bowl",
        category: "lunch",
        type: "veg",
        tags: ["high-protein", "veg"],
        calories: 380,
        protein: 16,
        carbs: 48,
        fats: 14,
        image: "https://images.unsplash.com/photo-1585937421612-70a90e2233f3?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Black lentils", "Rajma", "Cream", "Butter", "Naan or Rice"],
        description: "Protein-rich lentils slow-cooked with minimal cream for fitness goals."
    },
    {
        id: 6,
        name: "Fish Curry with Quinoa",
        category: "lunch",
        type: "non-veg",
        tags: ["omega-3", "high-protein", "non-veg"],
        calories: 440,
        protein: 38,
        carbs: 35,
        fats: 18,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3f?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Rohu/Salmon 200g", "Mustard seeds", "Coconut milk", "Quinoa", "Curry leaves"],
        description: "Omega-3 rich fish curry served with protein-packed quinoa instead of rice."
    },
    
    // Dinner
    {
        id: 7,
        name: "Palak Chicken",
        category: "dinner",
        type: "non-veg",
        tags: ["high-protein", "iron-rich", "non-veg"],
        calories: 480,
        protein: 42,
        carbs: 15,
        fats: 24,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Chicken 250g", "Fresh spinach", "Garlic", "Ginger", "Spices"],
        description: "Iron and protein powerhouse with tender chicken in spinach gravy."
    },
    {
        id: 8,
        name: "Tofu Tikka Masala",
        category: "dinner",
        type: "veg",
        tags: ["high-protein", "veg", "plant-based"],
        calories: 350,
        protein: 22,
        carbs: 28,
        fats: 16,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Tofu 200g", "Cashew gravy", "Tomatoes", "Capsicum", "Garam masala"],
        description: "Plant-based protein tikka for vegetarian muscle building."
    },
    {
        id: 9,
        name: "Keema Matar",
        category: "dinner",
        type: "non-veg",
        tags: ["high-protein", "non-veg"],
        calories: 520,
        protein: 40,
        carbs: 22,
        fats: 26,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63?",
        ingredients: ["Minced lamb/chicken", "Green peas", "Onion tomato masala", "Whole wheat bread"],
        description: "High-protein keema with the goodness of green peas."
    },
    
    // Snacks
    {
        id: 10,
        name: "Greek Yogurt Chaat",
        category: "snack",
        type: "veg",
        tags: ["protein", "veg", "quick"],
        calories: 220,
        protein: I5,
        carbs: 25,
        fats: 8,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Greek yogurt", "Sprouted moong", "Cucumber", "Pomegranate", "Chaat masala"],
        description: "Twist on traditional chaat with probiotic-rich yogurt."
    },
    {
        id: 11,
        name: "Roasted chickpeas",
        category: "snack",
        type: "veg",
        tags: ["vegan", "high-fiber", "plant-protein"],
        calories: 180,
        protein: 9,
        carbs: 24,
        fats: 6,
        image: "https://images.unsplash.com/photo-1615485290382-441e4040c61Y?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Kabuli chana", "Olive oil", "Indian spices", "Lemon"],
        description: "Crunchy roasted chickpeas - perfect desk snack."
    },
    {
        id: 12,
        name: "Protein Lassi",
        category: "snack",
        type: "veg",
        tags: ["protein", "recovery", "veg"],
        calories: 280,
        protein: 24,
        carbs: 30,
        fats: 8,
        image: "https://images.unsplash.com/photo-1516916759473-600c07bc10eb?w=800&auto=format&fit=crop&q=80",
        ingredients: ["Whey protein", "Yogurt", "Cardamom", "Honey", "Almonds"],
        description: "Post-workout desi protein shake with cardamom flavor."
    }
];

// State Management
let selectedMeals = [];
let currentPlan = [];
let userTargets = {
    calories: 2000,
    protein: 150
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderMeals();
    loadFromLocalStorage();
});

// Calculate Macros Function
function calculateMacros() {
    const weight = parseFloat(document.getElementById('weight').value) || 70;
    const activity = parseFloat(document.getElementById('activity').value) || 1.55;
    const goal = document.getElementById('goal').value;
    
    // Mifflin-St Jeor Equation with Indian body type adjustments
    const bmr = 10 * weight + 6.25 * 170 - 5 * 25 + 5; // Assuming average height/active avg
    
    let tdee = Math.round(bmr * activity);
    
    if (goal === 'cut') tdee -= 500;
    if (goal === 'bulk') tdee += 300;
    
    const protein = Math.round(weight * 2.2); // High protein for fitness
    const fats = Math.round(tdee * 0.25 / 9);
    const carbs = Math.round((tdee - (protein * 4) - (fats * 9)) / 4);
    
    // Update UI
    document.getElementById('result-protein').textContent = `${protein}g`;
    document.getElementById('result-carbs').textContent = `${carbs}g`;
    document.getElementById('result-fats').textContent = `${fats}g`;
    document.getElementById('result-calories').textContent = tdee;
    
    document.getElementById('macro-results').classList.remove('hidden');
    
    userTargets = { calories: tdee, protein };
    updateDashboard();
}

// Render Meal Cards
function renderMeals(filter = 'all') {
    const grid = document.getElementById('meals-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? mealDatabase : mealDatabase.filter(m => m.tags.includes(filter));
    
    filtered.forEach((meal, index) => {
        const card = document.createElement('div');
        card.className = `glass-card meal-card rounded-3xl overflow-hidden border border-white/10 ${selectedMeals.includes(meal.id) ? 'ring-2 ring-orange-500' : ''}`;
        card.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s both`;
        
        card.innerHTML = `
    <div class="relative h-48 overflow-hidden">
                <img src="${meal.image}" alt="${meal.name}" class="meal-image w-full h-full object-cover transition-transform duration-500">
                <div class="absolute top-4 right-4 flex gap-2">
                    ${meal.tags.map(tag => `
                        <span class="meal-tag ${getTagClass(tag)}">${getTagLabel(tag)}</span>
                    `).join('')}
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-white">${meal.name}</h3>
                    <span class="text-orange-400 font-bold">${meal.calories} kcal</span>
                </div>
                <p class="text-slate-400 text-sm mb-4 line-clamp-2">${meal.description}</p>
                
                <div class="flex gap-4 mb-4 text-sm">
                    <div class="flex items-center gap-1 text-emerald-400">
                        <i data-lucide="dumbbell" class="w-4 h-4"></i>
                        <span>${meal.protein}g</span>
                    </div>
                    <div class="flex items-center gap-1 text-blue-400">
                        <i data-lucide="wheat" class="w-4 h-4"></i>
                        <span>${meal.carbs}g</span>
                    </div>
                    <div class="flex items-center gap-1 text-yellow-400">
                        <i data-lucide="droplet" class="w-4 h-4"></i>
                        <span>${meal.fats}g</span>
                    </div>
                </div>
                
                <button onclick="toggleMeal(${meal.id})" class="w-full py-3 rounded-xl font-semibold transition-all ${selectedMeals.includes(meal.id) ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-white/10 hover:bg-white/20'}">
                    ${selectedMeals.includes(meal.id) ? '✓ Added to Plan' : '+ Add to Plan'}
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    lucide.createIcons();
}

function getTagClass(tag) {
    const map = {
        'high-protein': 'tag-high-protein',
        'low-carb': 'tag-low-carb',
        'veg': 'tag-veg',
        'non-veg': 'tag-nonveg',
        'vegan': 'tag-veg',
        'quick': 'tag-high-protein',
        'high-fiber': 'tag-low-carb',
        'recovery': 'tag-high-protein',
        'omega-3': 'tag-high-protein',
        'plant-based': 'tag-veg',
        'iron-rich': 'tag-high-protein'
    };
    return map[tag] || 'tag-high-protein';
}

function getTagLabel(tag) {
    const map = {
        'high-protein': '💪 High Protein',
        'low-carb': '🥗 Low Carb',
        'veg': '🥬 Veg',
        'non-veg': '🍗 Non-Veg',
        'vegan': '🌱 Vegan',
        'quick': '⚡ Quick',
        'high-fiber': '🌾 Fiber',
        'recovery': '🔄 Recovery',
        'omega-3': '🐟 Omega-3',
        'plant-based': '🌿 Plant',
        'iron-rich': '⚡ Iron'
    };
    return map[tag] || tag;
}

// Filter meals
function filterMeals(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-orange-500', 'text-white');
        if(btn.dataset.filter === category) {
            btn.classList.add('active', 'bg-orange-500', 'text-white');
        }
    });
    
    renderMeals(category);
}

// Toggle meal selection
function toggleMeal(id) {
    const index = selectedMeals.indexOf(id);
    if (index > -1) {
        selectedMeals.splice(index, 1);
        showToast('Meal removed from plan');
    } else {
        selectedMeals.push(id);
        showToast('Meal added to plan! 💪');
    }
    renderMeals(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
    updateDashboard();
    updateShoppingList();
    saveToLocalStorage();
}

// Generate Daily Plan
function generatePlan() {
    if (selectedMeals.length === 0) {
        // Auto-select balanced meals if none selected
        const breakfast = mealDatabase.filter(m => m.category === 'breakfast');
        const lunch = mealDatabase.filter(m => m.category === 'lunch');
        const dinner = mealDatabase.filter(m => m.category === 'dinner');
        const snacks = mealDatabase.filter(m => m.category === 'snack');
        
        currentPlan = [
            breakfast[Math.floor(Math.random() * breakfast.length)],
            lunch[Math.floor(Math.random() * lunch.length)],
            dinner[Math.floor(Math.random() * dinner.length)],
            snacks[Math.floor(Math.random() * snacks.length)]
        ].filter(Boolean);
    } else {
        currentPlan = selectedMeals.map(id => mealDatabase.find(m => m.id === id));
    }
    
    renderDailyPlan();
    document.getElementById('planner').classList.remove('hidden');
    scrollToSection('planner');
}

function regeneratePlan() {
    generatePlan();
    showToast('New plan generated! 🔄');
}

function renderDailyPlan() {
    const container = document.getElementById('daily-plan');
    container.innerHTML = '';
    
    const categories = ['breakfast', 'lunch', 'dinner', 'snack'];
    const categoryEmojis = {'breakfast': '🌅', 'lunch': '☀️', 'dinner': '🌙', 'snack': '🍎'};
    
    categories.forEach(cat => {
        const meal = currentPlan.find(m => m.category === cat) || 
                    mealDatabase.filter(m => m.category === cat)[Math.floor(Math.random() * mealDatabase.filter(m => m.category === cat).length)];
        
        if (meal) {
            const div = document.createElement('div');
            div.className = 'glass-card rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-4 items-center animate-slide-in';
            div.innerHTML = `
                <img src="${meal.image}" class="w-24 h-24 rounded-2xl object-cover" alt="${meal.name}">
                <div class="flex-1">
                    <h4 class="font-bold text-lg flex items-center gap-2">
                        ${categoryEmojis[cat]} ${meal.name}
                        <span class="text-xs px-2 py-1 rounded-full ${meal.type === 'veg' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}">${meal.type}</span>
                    </h4>
                    <div class="flex gap-4 mt-2 text-sm text-slate-400">
                        <span>${meal.calories} kcal</span>
                        <span class="text-emerald-400">${meal.protein}g protein</span>
                        <span class="text-blue-400">${meal.carbs}g carbs</span>
                    </div>
                </div>
                <button onclick="toggleMeal(${meal.id})" class="p-3 rounded-full hover:bg-white/10 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                <utton>
            `;
            container.appendChild(div);
        }
    });
    
    lucide.createIcons();
}

// Update Dashboard
function updateDashboard() {
    const totals = selectedMeals.reduce((acc, id) => {
        const meal = mealDatabase.find(m => m.id === id);
        if (meal) {
            acc.calories += meal.calories;
            acc.protein += meal.protein;
        }
        return acc;
    }, { calories: 0, protein: 0 });
    
    animateValue('total-calories', parseInt(document.getElementById('total-calories').textContent) || 0, totals.calories, 1000);
    animateValue('total-protein', parseInt(document.getElementById('total-protein').textContent) || 0, totals.protein, 1000);
    document.getElementById('meals-count').textContent = selectedMeals.length;
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;
  
    function run() {
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));
        obj.innerHTML = value + (id.includes('protein') ? 'g' : '');
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

// Shopping List
function updateShoppingList() {
    const container = document.getElementById('shopping-list');
    const allIngredients = new Set();
    
    selectedMeals.forEach(id => {
        const meal = mealDatabase.find(m => m.id === id);
        meal?.ingredients.forEach(ing => allIngredients.add(ing));
    });
    
    if (allIngredients.size === 0) {
        container.innerHTML = '<p class="text-slate-500 text-center py-8">Add meals to generate your shopping list...</p>';
        return;
    }
    
    container.innerHTML = Array.from(allIngredients).map((ing, idx) => `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 animate-slide-in" style="animation-delay: ${idx * 0.05}s">
            <div class="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs">
                <i data-lucide="check" class="w-3 h-3"></i>
            </div>
            <span class="text-slate-300">${ing}</span>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Utility functions
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    // Mobile menu toggle (simplified for this demo)
    alert('Mobile menu - implement hamburger menu as needed');
}

// LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('desiGains_meals', JSON.stringify(selectedMeals));
    localStorage.setItem('desiGains_targets', JSON.stringify(userTargets));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('desiGains_meals');
    const targets = localStorage.getItem('desiGains_targets');
    
    if (saved) {
        selectedMeals = JSON.parse(saved);
        updateDashboard();
        updateShoppingList();
        renderMeals();
    }
    
    if (targets) {
        userTargets = JSON.parse(targets);
        document.getElementById('total-protein').textContent = userTargets.protein + 'g';
        document.getElementById('total-calories').textContent = userTargets.calories;
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
        }
    });
}, observerOptions);

// Observe all cards after render
setTimeout(() => {
    document.querySelectorAll('.glass-card').forEach(el => observer.observe(el));
}, 100);
