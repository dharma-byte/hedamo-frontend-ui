const products = [
  {
    id: 1,
    name: "EcoFiber Packaging",
    category: "Packaging",
    producer: "GreenWrap Ltd",
    status: "Published",
    updatedAt: "2025-01-10",
    declaredBy: "GreenWrap Ltd",
    evidenceCount: 3,
    versions: [
      { version: "v1", date: "2024-12-01", status: "Submitted" },
      { version: "v2", date: "2025-01-10", status: "Published" }
    ]
  },
  {
    id: 2,
    name: "BioClean Detergent",
    category: "Chemicals",
    producer: "PureChem",
    status: "Draft",
    updatedAt: "2025-01-05",
    declaredBy: "PureChem",
    evidenceCount: 1,
    versions: [
      { version: "v1", date: "2025-01-05", status: "Draft" }
    ]
  },
  {
    id: 3,
    name: "Recycled Steel Beam",
    category: "Construction",
    producer: "BuildGreen Corp",
    status: "Submitted",
    updatedAt: "2025-01-12",
    declaredBy: "BuildGreen Corp",
    evidenceCount: 2,
    versions: [
      { version: "v1", date: "2025-01-01", status: "Draft" },
      { version: "v2", date: "2025-01-12", status: "Submitted" }
    ]
  },
  {
    id: 4,
    name: "Compostable Coffee Cup",
    category: "Packaging",
    producer: "EcoServe",
    status: "Published",
    updatedAt: "2025-01-14",
    declaredBy: "EcoServe",
    evidenceCount: 4,
    versions: [
      { version: "v1", date: "2025-01-05", status: "Submitted" },
      { version: "v2", date: "2025-01-14", status: "Published" }
    ]
  }
];

const grid = document.getElementById("productGrid");
const skeletonGrid = document.getElementById("skeletonGrid");
const search = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const sortSelect = document.getElementById("sortSelect");

/* ---------- LOADING SKELETON ---------- */
function showSkeleton() {
  grid.classList.add("hidden");
  skeletonGrid.classList.remove("hidden");

  skeletonGrid.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const s = document.createElement("div");
    s.className = "card skeleton skeleton-card";
    skeletonGrid.appendChild(s);
  }
}

function hideSkeleton() {
  skeletonGrid.classList.add("hidden");
  grid.classList.remove("hidden");
}

/* ---------- RENDER LIST ---------- */
function renderList(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No products match your criteria.</p>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    `;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0; // keyboard focus
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${p.name}`);

    card.onclick = () => showDetail(p.id);

    // Allow "Enter" key to open card
    card.onkeydown = (e) => {
      if (e.key === "Enter") {
        showDetail(p.id);
      }
    };

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.category}</p>
      <p>Producer: ${p.producer}</p>
      <span class="badge ${p.status.toLowerCase()}">${p.status}</span>
      <small>Updated: ${p.updatedAt}</small>
    `;

    grid.appendChild(card);
  });
}

/* ---------- FILTER + SORT ---------- */
function applyFiltersAndSort() {
  let filtered = [...products];

  // Search
  if (search.value) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }

  // Category
  if (categoryFilter.value) {
    filtered = filtered.filter(p =>
      p.category === categoryFilter.value
    );
  }

  // Status
  if (statusFilter.value) {
    filtered = filtered.filter(p =>
      p.status === statusFilter.value
    );
  }

  // Sorting
  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortSelect.value === "date") {
    filtered.sort((a, b) =>
      new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }

  renderList(filtered);
}

/* ---------- DETAIL VIEW ---------- */
function showDetail(id) {
  const p = products.find(x => x.id === id);

  document.getElementById("detailName").innerText = p.name;
  document.getElementById("declaredBy").innerText = p.declaredBy;
  document.getElementById("declaredOn").innerText = p.updatedAt;
  document.getElementById("evidence").innerText = p.evidenceCount;

  const vList = document.getElementById("versionList");
  vList.innerHTML = "";
  p.versions.forEach(v => {
    const li = document.createElement("li");
    li.innerText = `${v.version} — ${v.date} (${v.status})`;
    vList.appendChild(li);
  });

  document.getElementById("productGrid").classList.add("hidden");
  document.getElementById("detailView").classList.remove("hidden");
}

function goBack() {
  document.getElementById("detailView").classList.add("hidden");
  document.getElementById("productGrid").classList.remove("hidden");
}

/* ---------- EVENT LISTENERS ---------- */
search.oninput = applyFiltersAndSort;
categoryFilter.onchange = applyFiltersAndSort;
statusFilter.onchange = applyFiltersAndSort;
sortSelect.onchange = applyFiltersAndSort;

/* ---------- INITIAL LOAD WITH SKELETON ---------- */
showSkeleton();

setTimeout(() => {
  hideSkeleton();
  renderList(products);
}, 1200);   // smooth 1.2s loading state
