/* Eduzex-style "Choose your Goal" grid */
(function () {
  var GOALS = [{"name": "PW NSAT", "grad": "pink-500|fuchsia-500", "img": "assets/goals/e99a5023-8bd3-4315-af19-66b0106873b1.png"}, {"name": "NEET", "grad": "amber-400|orange-500", "img": "assets/goals/333f01d4-6eef-4242-9984-f523f36ccb67.png"}, {"name": "JEE & State Engineering Exams", "grad": "indigo-500|violet-500", "img": "assets/goals/eed4f111-30bb-4871-ad22-b3597b4ca63e.png"}, {"name": "UPSC", "grad": "rose-500|red-600", "img": "assets/goals/383231fe-cfca-4a3a-bffa-93c9ec4357fc.png"}, {"name": "Defence", "grad": "emerald-400|green-600", "img": "assets/goals/86b0eba9-7a7f-477a-a763-848ecc8b6d2a.png"}, {"name": "MBA", "grad": "sky-400|cyan-500", "img": "assets/goals/30dafd95-9115-4d68-a938-1b8627fd1345.png"}, {"name": "CUET", "grad": "violet-500|purple-600", "img": "assets/goals/2683ac11-efe3-47d9-8e1d-92479d116ef9.png"}, {"name": "CSIR NET", "grad": "yellow-400|amber-600", "img": "assets/goals/488fefa7-552f-4ab6-80e7-f81d9d926838.png"}, {"name": "Law", "grad": "pink-500|fuchsia-500", "img": "assets/goals/779210e1-ceda-49f7-b865-0381541d50e9.png"}, {"name": "Class 12th", "grad": "amber-400|orange-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/ccebef3e-a39f-4ced-883f-49ac5e544e26.png"}, {"name": "Class 11th", "grad": "indigo-500|violet-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/b9f97bcb-7d90-4e05-a6d4-f7c0a2bf3e24.png"}, {"name": "Class 10th", "grad": "rose-500|red-600", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/35877d7f-07b3-4659-91c6-3cae0ccc6ac9.png"}, {"name": "Class 9th", "grad": "emerald-400|green-600", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f585be5e-b5df-43cd-8911-3760bbbbc639.png"}, {"name": "CA", "grad": "sky-400|cyan-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/8e26b0b6-56f0-4833-8ae6-19a2d5936531.png"}, {"name": "GATE", "grad": "violet-500|purple-600", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d3a0dd8f-2c2c-4cb0-bb68-dcc23fde633d.png"}, {"name": "Classes 6th to 8th", "grad": "yellow-400|amber-600", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d11e89d1-1c40-470b-9a20-bd7b4e30cb57.png"}, {"name": "Classes 1st to 5th", "grad": "pink-500|fuchsia-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/9188d7af-14ea-48d6-a3d2-8c72882e9b85.png"}, {"name": "Kindergarten", "grad": "amber-400|orange-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2499eef8-f1f2-4d64-b5d9-da110486e57a.png"}, {"name": "Olympiad", "grad": "indigo-500|violet-500", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/ded8efe4-7261-45c7-9647-3eb2a722b3a1.svg"}, {"name": "Skills", "grad": "rose-500|red-600", "img": "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/30b3fa0b-db48-4fa0-90d4-436b11910998.png"}];
  var COLORS = {"pink-500":"#ec4899","fuchsia-500":"#d946ef","amber-400":"#fbbf24","orange-500":"#f97316","indigo-500":"#6366f1","violet-500":"#8b5cf6","rose-500":"#f43f5e","red-600":"#dc2626","emerald-400":"#34d399","green-600":"#16a34a","sky-400":"#38bdf8","cyan-500":"#06b6d4","purple-600":"#9333ea","yellow-400":"#facc15","amber-600":"#d97706"};
  function build() {
    var grid = document.getElementById("goalGrid");
    if (!grid || grid.children.length) return;
    GOALS.forEach(function (g) {
      var c = g.grad.split("|");
      var b = document.createElement("button");
      b.type = "button"; b.className = "goal-card";
      var tile = document.createElement("div");
      tile.className = "goal-tile";
      tile.style.background = "linear-gradient(135deg," + COLORS[c[0]] + "," + COLORS[c[1]] + ")";
      var img = document.createElement("img");
      img.src = g.img; img.alt = g.name; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
      img.onerror = function () { img.remove(); tile.textContent = g.name.charAt(0); tile.classList.add("goal-initial"); };
      tile.appendChild(img);
      var label = document.createElement("span");
      label.className = "goal-name"; label.textContent = g.name;
      b.appendChild(tile); b.appendChild(label);
      b.addEventListener("click", function () {
        if (typeof showToast === "function") showToast(g.name + " courses are coming soon.");
      });
      grid.appendChild(b);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
