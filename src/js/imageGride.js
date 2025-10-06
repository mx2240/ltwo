
/*
    Data array: add/remove/change items freely.
    Each object should have: image (url), title (string), desc (string), badge (optional).
    */
const items = [
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a1d0a",
        title: "Hidden Tropical Beach",
        desc: "White sand, crystal waters and barely any footprints — a quiet escape for slower days.",
        badge: "Beach"
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f3f8f",
        title: "Sunset Cliff View",
        desc: "A dramatic drop into the ocean makes this a perfect spot for golden-hour photos.",
        badge: "Sunset"
    },
    {
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9dfb0c",
        title: "Lush Green Cove",
        desc: "Hidden behind rocks and foliage, this cove is a tiny paradise for snorkelers.",
        badge: "Nature"
    },
    {
        image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=60d8b3",
        title: "Blue Wave Arch",
        desc: "Sculpted by the sea, an archway of waves and stone that photographers love.",
        badge: "Photo Spot"
    }
];

/* Render loop */
const grid = document.getElementById('grid');

function createCard({ image, title, desc, badge }) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
    <img class="thumb" src="${image}" alt="${escapeHtml(title)}">
        <div class="card-body">
            <h2 class="title">${escapeHtml(title)}</h2>
            <p class="desc">${escapeHtml(desc)}</p>
            <div class="meta">
                <div class="badge">${badge ? escapeHtml(badge) : 'Info'}</div>
                <button class="btn" type="button" onclick="onCardClick('${escapeForJs(title)}')">View</button>
            </div>
        </div>
        `;
    return card;
}

function render(itemsArray) {
    grid.innerHTML = '';
    itemsArray.forEach(item => grid.appendChild(createCard(item)));
}

/* small helper to keep inserted strings safe */
function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/[&<>"']/g, function (m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
}

/* used in onclick to pass title - escape single quotes */
function escapeForJs(s) {
    return (s || '').replace(/'/g, "\\'");
}

/* example action when user clicks "View" */
function onCardClick(title) {
    alert('You clicked: ' + title);
}

/* initial render */
render(items);

/* Example: show how to add more items programmatically (uncomment to test)
setTimeout(() => {
                items.push({
                    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f3b7b",
                    title: "Secret Lagoon",
                    desc: "A calm lagoon perfect for paddleboarding at dawn.",
                    badge: "Lagoon"
                });
            render(items);
}, 1500);
            */

export default function ImageGride() {
    return (
        <div id="grid" className="grid">
        </div>
    )
}