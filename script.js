// ---------- Select Elements ----------
const buttons = document.querySelectorAll('.add-btn');
let cartCount = 0;

// Optional: Create a floating cart badge dynamically
const cartBadge = document.createElement('div');
cartBadge.id = 'cart-badge';
cartBadge.textContent = cartCount;
document.body.appendChild(cartBadge);

// ---------- Add to Cart Button Logic ----------
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Change button text and color
        btn.classList.add('added');
        btn.textContent = '✔ Added!';

        // Increase cart count
        cartCount++;
        cartBadge.textContent = cartCount;

        // Animate cart badge
        cartBadge.classList.add('pop');
        setTimeout(() => cartBadge.classList.remove('pop'), 300);

        // Reset button after 1.5s
        setTimeout(() => {
            btn.classList.remove('added');
            btn.textContent = 'Add to Cart';
        }, 1500);
    });
});

// ---------- Floating Cart Badge Styling ----------
const badgeStyle = document.createElement('style');
badgeStyle.textContent = `
  #cart-badge {
    position: fixed;
    top: 20px;
    right: 25px;
    background: linear-gradient(90deg, #e91e63, #6c63ff);
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    box-shadow: 0 0 12px rgba(108, 99, 255, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 100;
  }

  #cart-badge.pop {
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(233, 30, 99, 0.6);
  }
`;
document.head.appendChild(badgeStyle);

// ---------- Optional: Dark Mode Toggle ----------
const darkToggle = document.createElement('button');
darkToggle.textContent = "🌙 Dark Mode";
darkToggle.id = "theme-toggle";
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ?
        "☀️ Light Mode" :
        "🌙 Dark Mode";
});

// ---------- Dark Mode Styles ----------
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  body.dark {
    background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
    color: #f5f5f5;
  }

  body.dark .product-card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  body.dark .info h3 {
    color: #f5f5f5;
  }

  body.dark #cart-badge {
    box-shadow: 0 0 15px rgba(233, 30, 99, 0.7);
  }

  #theme-toggle {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: linear-gradient(90deg, #6c63ff, #e91e63);
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    box-shadow: 0 0 15px rgba(108, 99, 255, 0.4);
    transition: transform 0.3s ease;
  }

  #theme-toggle:hover {
    transform: scale(1.05);
  }
`;
document.head.appendChild(darkStyle);