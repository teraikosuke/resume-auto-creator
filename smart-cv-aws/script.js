(function () {
  const O =
    "https://script.google.com/macros/s/AKfycbyYmqbjwwkZlxWNfFVZi8ORT0mHw0sh9VlpYBcVsYz_UZSB63OM6LOya0UAZgZgCyhGpw/exec";
  function jn() {
    let r = "";
    for (let t = 1; t <= 12; t++) {
      r += `<tr id="edu-row-${t}" class="education-value"><td class="education-year-value" id="edu-preview-year-${t}"></td><td class="education-container-month-value" id="edu-preview-month-${t}"></td><td class="education-history-value" id="edu-preview-work-${t}"></td></tr>`;
    }
    let n = "";
    for (let t = 1; t <= 6; t++) {
      n += `<tr id="skill-row-${t}" class="skill-value"><td class="skill-year-value" id="skill-preview-year-${t}"></td><td class="skill-container-month-value" id="skill-preview-month-${t}"></td><td class="skill-history-value" id="skill-preview-history-${t}"></td></tr>`;
    }
    return `<div class="resume-preview"><div class="resume-content" id="resume-content-whole"><div style="display: flex; justify-content: space-between; margin-bottom: 5mm;"><div class="title">履歴書</div><div class="date-right" id="preview-today-date"></div></div><div class="block"><div class="top-section"><table class="name-furigana-table"><tr class="furigana-box"><td class="furigana-label">ふりがな</td><td class="furigana-value"><span id="preview-furigana"></span></td></tr><tr class="name-table"><td class="name-label">氏名</td><td class="name-value-left"><span id="preview-name" style="font-weight: bold"></span></td></tr></table><div class="photo-box"><img id="preview-photo-img" /></div></div></div><div class="block"><table class="birthday-gender-table"><tr class="birthday-box"><td class="birthday-label">生年月日</td><td class="birthday-value"><span id="preview-birth-year"></span>年 <span id="preview-birth-month"></span>月 <span id="preview-birth-day"></span>日（<span id="preview-age"></span>歳）</td><td class="gender-value"><span id="preview-gender"></span></td></tr></table></div><div class="block"><table class="contact-info-table"><tr class="contact-info"><th class="address-furigana-label">ふりがな</th><td class="address-furigana-value"><span id="preview-address-furigana"></span></td><th class="tel-label">電話</th><td class="tel-value"><span id="preview-phone"></span></td></tr><tr><th class="address-label">現住所</th><td class="address-value">〒<span id="preview-postal-code"></span><br /><span id="preview-address"></span></td><th class="email-label">Email</th><td class="email-value"><span id="preview-email"></span></td></tr></table></div><div class="block"><table class="alt-contact-table"><tr class="alt-contact-info"><th class="alt-address-furigana-label">ふりがな</th><td class="alt-address-furigana-value"><span id="preview-alt-address-furigana"></span></td><th class="alt-tel-label">電話</th><td class="alt-tel-value"><span id="preview-alt-phone"></span></td></tr><tr><th class="alt-address-label">現住所</th><td class="alt-address-value">〒<span id="preview-alt-postal-code"></span><br /><span id="preview-alt-address"></span></td><th class="alt-email-label">Email</th><td class="email-value"><span id="preview-alt-email"></span></td></tr></table></div><div class="block"><table class="education-table"><tr class="education-info"><th class="education-year">年</th><th class="education-container-month">月</th><th class="education-history">学歴・職歴</th></tr>${r}</table></div><div class="block"><table class="skill-table"><tr class="skill-info"><th class="skill-year">年</th><th class="skill-container-month">月</th><th class="skill-history">免許・資格</th></tr>${n}</table></div><div class="block"><table class="motivation-table"><tr><th class="motivation-label">志望動機など</th></tr><tr><td class="motivation-value"><span id="preview-motivation"></span></td></tr></table></div><div class="block"><table class="pr-table"><tr><th class="pr-label">自己PRなど</th></tr><tr><td class="pr-value"><span id="preview-pr"></span></td></tr></table></div><div class="block"><table class="request-table"><tr><th class="request-label">本人希望（給与・職種・勤務時間・勤務地 等）</th></tr><tr><td class="request-value"><span id="preview-request"></span></td></tr></table></div></div></div>`;
  }
  const Q = document.getElementById("resume-pages");
  function ze() {
    const r = document.createElement("div");
    return (
      r.classList.add("resume-page"), (r.innerHTML = jn()), Q.appendChild(r), r
    );
  }
  let V = ze();
  (function se() {
    const r = new Date(),
      t = r.getFullYear(),
      n = r.getMonth() + 1,
      e = r.getDate(),
      i = t - 2018;
    document.getElementById(
      "preview-today-date"
    ).textContent = `令和 ${i} 年 ${n} 月 ${e} 日現在`;
  })();
  function Ye(r, t) {
    const n = document.querySelector(r),
      e = document.querySelector(t);
    if (!n || !e) return;
    function i() {
      (e.textContent = n.value), Ue();
    }
    n.addEventListener("input", i), i();
  }
  Ye("#input-name", "#preview-name");
  Ye("#input-furigana", "#preview-furigana");
  Ye("#input-postal-code", "#preview-postal-code");
  Ye("#input-address-furigana", "#preview-address-furigana");
  Ye("#input-address", "#preview-address");
  Ye("#input-phone", "#preview-phone");
  Ye("#input-email", "#preview-email");
  Ye("#input-alt-postal-code", "#preview-alt-postal-code");
  Ye("#input-alt-address-furigana", "#preview-alt-address-furigana");
  Ye("#input-alt-address", "#preview-alt-address");
  Ye("#input-alt-phone", "#preview-alt-phone");
  Ye("#input-alt-email", "#preview-alt-email");
  Ye("#input-motivation", "#preview-motivation");
  Ye("#input-pr", "#preview-pr");
  Ye("#input-request", "#preview-request");
  const aE = document.getElementById("birth-year"),
    lE = document.getElementById("birth-month"),
    uE = document.getElementById("birth-day"),
    cE = document.getElementById("preview-birth-year"),
    dE = document.getElementById("preview-birth-month"),
    fE = document.getElementById("preview-birth-day");
  function pE() {
    (cE.textContent = aE.value),
      (dE.textContent = lE.value),
      (fE.textContent = uE.value),
      Ue();
  }
  [aE, lE, uE].forEach((r) => r.addEventListener("input", pE));
  Ye("#age", "#preview-age");
  Ye("#gender", "#preview-gender");
  const hE = document.getElementById("input-photo"),
    gE = document.getElementById("preview-photo-img");
  hE.addEventListener("change", () => {
    const r = hE.files[0];
    if (!r) {
      (gE.src = ""), Ue();
      return;
    }
    const t = new FileReader();
    (t.onload = (n) => {
      (gE.src = n.target.result), Ue();
    }),
      t.readAsDataURL(r);
  });
  const vE = new Date().getFullYear();
  function mE(r) {
    for (let t = 1900; t <= vE; t++) {
      const n = document.createElement("option");
      (n.value = t), (n.textContent = t), r.appendChild(n);
    }
  }
  function wE(r) {
    for (let t = 1; t <= 12; t++) {
      const n = document.createElement("option");
      (n.value = t), (n.textContent = t), r.appendChild(n);
    }
  }
  mE(aE), wE(lE);
  for (let r = 1; r <= 31; r++) {
    const t = document.createElement("option");
    (t.value = r), (t.textContent = r), uE.appendChild(t);
  }
  const yE = document.getElementById("age");
  for (let r = 0; r <= 100; r++) {
    const t = document.createElement("option");
    (t.value = r), (t.textContent = r), yE.appendChild(t);
  }
  const bE = document.getElementById("education-container");
  let xE = 1;
  const kE = 12;
  const S0 = bE.querySelector(".edu-year"),
    C0 = bE.querySelector(".edu-month"),
    M0 = bE.querySelector(".edu-work");
  function L0(r, t, n, e) {
    const i = document.getElementById(`edu-preview-year-${e}`),
      o = document.getElementById(`edu-preview-month-${e}`),
      s = document.getElementById(`edu-preview-work-${e}`);
    function a() {
      (i.textContent = r.value),
        (o.textContent = t.value),
        (s.textContent = n.value),
        Ue();
    }
    r.addEventListener("input", a),
      t.addEventListener("input", a),
      n.addEventListener("input", a),
      a();
  }
  L0(S0, C0, M0, 1);
  function N0(r, t) {
    for (let n = 1900; n <= vE; n++) {
      const e = document.createElement("option");
      (e.value = n), (e.textContent = n), r.appendChild(e);
    }
    for (let n = 1; n <= 12; n++) {
      const e = document.createElement("option");
      (e.value = n), (e.textContent = n), t.appendChild(e);
    }
  }
  N0(S0, C0),
    document
      .getElementById("add-education-row")
      .addEventListener("click", () => {
        if (xE >= kE) {
          alert("学歴・職歴は最大12行までです。");
          return;
        }
        xE++;
        const r = xE,
          t = document.createElement("div");
        (t.className = "row-container"),
          (t.innerHTML = `<div class="form-inline"><select class="edu-year"><option value="">--</option></select><select class="edu-month"><option value="">--</option></select><input type="text" class="edu-work" placeholder="例：〇〇大学 卒業" /></div>`),
          bE.appendChild(t);
        const n = t.querySelector(".edu-year"),
          e = t.querySelector(".edu-month"),
          i = t.querySelector(".edu-work");
        N0(n, e), L0(n, e, i, r);
      }),
    document
      .getElementById("remove-education-last")
      .addEventListener("click", () => {
        if (xE > 1) {
          const r = bE.querySelectorAll(".row-container");
          bE.removeChild(r[r.length - 1]),
            (document.getElementById(`edu-preview-year-${xE}`).textContent =
              ""),
            (document.getElementById(`edu-preview-month-${xE}`).textContent =
              ""),
            (document.getElementById(`edu-preview-work-${xE}`).textContent =
              ""),
            xE--,
            Ue();
        }
      });
  const AE = document.getElementById("skill-container");
  let TE = 1;
  const EE = 6;
  const iS = AE.querySelector(".license-year"),
    oS = AE.querySelector(".license-month"),
    sS = AE.querySelector(".skill-history");
  function aS(r, t, n, e) {
    const i = document.getElementById(`skill-preview-year-${e}`),
      o = document.getElementById(`skill-preview-month-${e}`),
      s = document.getElementById(`skill-preview-history-${e}`);
    function a() {
      (i.textContent = r.value),
        (o.textContent = t.value),
        (s.textContent = n.value),
        Ue();
    }
    r.addEventListener("input", a),
      t.addEventListener("input", a),
      n.addEventListener("input", a),
      a();
  }
  aS(iS, oS, sS, 1);
  function lS(r, t) {
    for (let n = 1900; n <= vE; n++) {
      const e = document.createElement("option");
      (e.value = n), (e.textContent = n), r.appendChild(e);
    }
    for (let n = 1; n <= 12; n++) {
      const e = document.createElement("option");
      (e.value = n), (e.textContent = n), t.appendChild(e);
    }
  }
  lS(iS, oS),
    document.getElementById("add-skill-row").addEventListener("click", () => {
      if (TE >= EE) {
        alert("免許・資格は最大6行までです。");
        return;
      }
      TE++;
      const r = TE,
        t = document.createElement("div");
      (t.className = "row-container"),
        (t.innerHTML = `<div class="form-inline"><select class="license-year"><option value="">--</option></select><select class="license-month"><option value="">--</option></select><input type="text" class="skill-history" placeholder="例：英語検定2級" style="text-align: left;" /></div>`),
        AE.appendChild(t);
      const n = t.querySelector(".license-year"),
        e = t.querySelector(".license-month"),
        i = t.querySelector(".skill-history");
      lS(n, e), aS(n, e, i, r);
    }),
    document
      .getElementById("remove-skill-last")
      .addEventListener("click", () => {
        if (TE > 1) {
          const r = AE.querySelectorAll(".row-container");
          AE.removeChild(r[r.length - 1]),
            (document.getElementById(`skill-preview-year-${TE}`).textContent =
              ""),
            (document.getElementById(`skill-preview-month-${TE}`).textContent =
              ""),
            (document.getElementById(
              `skill-preview-history-${TE}`
            ).textContent = ""),
            TE--,
            Ue();
        }
      });
  function Ue() {
    let r = Q.querySelectorAll(".resume-page");
    for (let t = 0; t < r.length; t++) {
      const n = r[t],
        e = n.querySelector(".resume-content");
      if (!e) continue;
      for (; R0(n, e); ) {
        let i = r[t + 1];
        if (!i) {
          (i = D0()), (r = Q.querySelectorAll(".resume-page"));
        }
        const o = i.querySelector(".resume-content"),
          s = e.querySelectorAll(".block");
        if (!s.length) break;
        const a = s[s.length - 1];
        o.insertBefore(a, o.firstChild);
      }
    }
  }
  function D0() {
    const r = document.createElement("div");
    return (
      r.classList.add("resume-page"),
      (r.innerHTML = `<div class="resume-preview"><div class="resume-content"></div></div>`),
      Q.appendChild(r),
      r
    );
  }
  function R0(r, t) {
    return t.scrollHeight > r.clientHeight;
  }
  const pdfSaveBtn = document.getElementById("pdf-save-btn"),
    agreeTerms = document.getElementById("agree-terms");
  function s0() {
    agreeTerms.checked
      ? ((pdfSaveBtn.disabled = false),
        (pdfSaveBtn.style.background = "#2ecc71"),
        (pdfSaveBtn.style.cursor = "pointer"))
      : ((pdfSaveBtn.disabled = true),
        (pdfSaveBtn.style.background = "#ccc"),
        (pdfSaveBtn.style.cursor = "not-allowed"));
  }
  agreeTerms.addEventListener("change", s0),
    s0(),
    pdfSaveBtn.addEventListener("click", async () => {
      if (!agreeTerms.checked) {
        alert("利用規約に同意する必要があります。");
        return;
      }
      pdfSaveBtn.disabled = true;
      const r = pdfSaveBtn.textContent;
      pdfSaveBtn.textContent = "生成中...";
      const t = document.createElement("span");
      t.classList.add("spinner"), pdfSaveBtn.appendChild(t), Ue();
      const n = {
        createdDate: new Date().toLocaleString(),
        name: document.getElementById("input-name").value,
        phone: document.getElementById("input-phone").value,
        email: document.getElementById("input-email").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        address: document.getElementById("input-address").value,
      };
      try {
        const e = await fetch(O, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(n),
          }),
          i = await e.text();
        console.log("GAS送信結果:", i), alert("履歴書が完成しました: " + i);
      } catch (e) {
        console.error("GAS送信エラー:", e), alert("エラーが発生しました");
      }
      try {
        const { jsPDF: e } = window.jspdf,
          i = new e("portrait", "pt", "a4"),
          o = document.querySelectorAll(".resume-page");
        for (let s = 0; s < o.length; s++) {
          s > 0 && i.addPage();
          const a = await html2canvas(o[s], { scale: 2 }),
            l = a.toDataURL("image/jpeg", 1),
            u = i.internal.pageSize.getWidth(),
            c = i.internal.pageSize.getHeight(),
            d = a.width,
            f = a.height,
            p = u / d,
            h = f * p;
          i.addImage(l, "JPEG", 0, 0, u, h);
        }
        i.save("履歴書.pdf");
      } catch (e) {
        console.error("PDF生成エラー:", e),
          alert("PDF生成中にエラーが発生しました");
      } finally {
        pdfSaveBtn.removeChild(t),
          (pdfSaveBtn.textContent = r),
          (pdfSaveBtn.disabled = false);
      }
      const a = document.getElementById("post-pdf-modal-overlay");
      a && (a.style.display = "flex");
    });
  const Y0 = document.getElementById("post-pdf-yes-btn");
  Y0 &&
    Y0.addEventListener("click", () => {
      window.location.href = "syokumu.html";
    });
  const G0 = document.getElementById("post-pdf-no-btn");
  G0 &&
    G0.addEventListener("click", () => {
      const r = document.getElementById("post-pdf-modal-overlay");
      r && (r.style.display = "none");
    });
  const openMotivationModalBtn = document.getElementById(
      "open-motivation-modal"
    ),
    closeMotivationModalBtn = document.getElementById("close-motivation-modal"),
    motivationModalOverlay = document.getElementById(
      "motivation-modal-overlay"
    ),
    bulletPointsInput = document.getElementById("motivation-bullet-points"),
    generateButton = document.getElementById("generate-motivation"),
    motivationInput = document.getElementById("input-motivation");
  openMotivationModalBtn.addEventListener("click", () => {
    motivationModalOverlay.style.display = "flex";
  }),
    closeMotivationModalBtn.addEventListener("click", () => {
      motivationModalOverlay.style.display = "none";
    });
  const MOTIVATION_WORKFLOW_ID = "07d33ea3-4e66-4924-9953-aa333df723f5",
    MOTIVATION_API_KEY = "Bearer app-9RoCGLstEdkBeg591WYtlLu3";
  generateButton.addEventListener("click", async () => {
    const r = bulletPointsInput.value.trim();
    if (!r) {
      alert("箇条書きの内容を入力してください。");
      return;
    }
    (generateButton.disabled = true),
      (generateButton.textContent = "生成中...");
    const t = document.createElement("span");
    t.classList.add("spinner"), generateButton.appendChild(t);
    try {
      const n = {
          workflow_id: MOTIVATION_WORKFLOW_ID,
          inputs: { text: r },
          user: "guest_user",
        },
        e = await fetch("https://api.dify.ai/v1/workflows/run", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: MOTIVATION_API_KEY,
          },
          body: JSON.stringify(n),
        });
      if (!e.ok) {
        const i = await e.json();
        throw new Error(
          `Dify APIエラー: ${e.status} ${e.statusText} - ${JSON.stringify(i)}`
        );
      }
      const i = await e.json();
      console.log("志望動機レスポンス:", i);
      const o =
          (i == null ? void 0 : i.data) == null
            ? void 0
            : i.data.outputs == null
            ? void 0
            : i.data.outputs.text || "生成テキストなし",
        s = o.length > 400 ? o.substring(0, 400) : o;
      (motivationInput.value = o),
        motivationInput.dispatchEvent(new Event("input")),
        alert("志望動機を自動生成しました。");
    } catch (n) {
      console.error(n), alert("エラーが発生しました(志望動機): " + n.message);
    } finally {
      generateButton.removeChild(t),
        (generateButton.disabled = false),
        (generateButton.textContent = "志望動機を自動生成");
    }
  });
  const openPrModalBtn = document.getElementById("open-pr-modal"),
    closePrModalBtn = document.getElementById("close-pr-modal"),
    prModalOverlay = document.getElementById("pr-modal-overlay"),
    prBulletPointsInput = document.getElementById("pr-bullet-points"),
    generatePrButton = document.getElementById("generate-pr"),
    prInput = document.getElementById("input-pr");
  openPrModalBtn.addEventListener("click", () => {
    prModalOverlay.style.display = "flex";
  }),
    closePrModalBtn.addEventListener("click", () => {
      prModalOverlay.style.display = "none";
    });
  const PR_WORKFLOW_ID = "7a85b2a7-f6ea-4e9a-a314-d1cd429dd5dd",
    PR_API_KEY = "Bearer app-VLBnOuNkP29lZj7ge6yVA5I6";
  generatePrButton.addEventListener("click", async () => {
    const r = prBulletPointsInput.value.trim();
    if (!r) {
      alert("箇条書きの内容を入力してください。");
      return;
    }
    (generatePrButton.disabled = true),
      (generatePrButton.textContent = "生成中...");
    const t = document.createElement("span");
    t.classList.add("spinner"), generatePrButton.appendChild(t);
    try {
      const n = {
          workflow_id: PR_WORKFLOW_ID,
          inputs: { text: r },
          user: "guest_user",
        },
        e = await fetch("https://api.dify.ai/v1/workflows/run", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: PR_API_KEY,
          },
          body: JSON.stringify(n),
        });
      if (!e.ok) {
        const i = await e.json();
        throw new Error(
          `Dify APIエラー: ${e.status} ${e.statusText} - ${JSON.stringify(i)}`
        );
      }
      const i = await e.json();
      console.log("自己PRレスポンス:", i);
      const o =
          (i == null ? void 0 : i.data) == null
            ? void 0
            : i.data.outputs == null
            ? void 0
            : i.data.outputs.text || "生成テキストなし",
        s = o.length > 400 ? o.substring(0, 400) : o;
      (prInput.value = o),
        prInput.dispatchEvent(new Event("input")),
        alert("自己PRを自動生成しました。");
    } catch (n) {
      console.error(n), alert("エラーが発生しました(自己PR): " + n.message);
    } finally {
      generatePrButton.removeChild(t),
        (generatePrButton.disabled = false),
        (generatePrButton.textContent = "自己PRを自動生成");
    }
  });
  const motivationTextarea = document.getElementById("input-motivation"),
    motivationCountEl = document.getElementById("motivation-char-count");
  motivationTextarea.addEventListener("input", () => {
    const r = motivationTextarea.value.length;
    motivationCountEl.textContent = `${r}/400`;
  });
  const prTextarea = document.getElementById("input-pr"),
    prCountEl = document.getElementById("pr-char-count");
  prTextarea.addEventListener("input", () => {
    const r = prTextarea.value.length;
    prCountEl.textContent = `${r}/400`;
  });
  const zoomInBtn = document.getElementById("zoom-in"),
    zoomOutBtn = document.getElementById("zoom-out"),
    zoomLevelEl = document.getElementById("zoom-level");
  let currentZoom = 1;
  zoomInBtn.addEventListener("click", () => {
    (currentZoom += 0.1), currentZoom > 2 && (currentZoom = 2), f0();
  });
  zoomOutBtn.addEventListener("click", () => {
    (currentZoom -= 0.1), currentZoom < 0.5 && (currentZoom = 0.5), f0();
  });
  function f0() {
    const r = document.querySelector(".resume-pages");
    (r.style.transform = `scale(${currentZoom})`),
      (r.style.transformOrigin = "top center"),
      (zoomLevelEl.textContent = Math.round(currentZoom * 100) + "%");
  }
  const ZIPCLOUD_API = "https://zipcloud.ibsnet.co.jp/api/search";
  async function fetchAndSetAddress(
    postalCodeValue,
    addressId,
    addressFuriganaId
  ) {
    const normalized = postalCodeValue.replace(/-/g, "");
    if (!/^\d{7}$/.test(normalized)) return;
    try {
      const url = `${ZIPCLOUD_API}?zipcode=${normalized}`,
        res = await fetch(url),
        data = await res.json();
      if (data.status !== 200 || !data.results) {
        alert("住所を取得できませんでした。郵便番号をご確認ください。");
        return;
      }
      const result = data.results[0];
      if (!result) {
        alert("該当の住所が見つかりませんでした。");
        return;
      }
      const addressFull = result.address1 + result.address2 + result.address3,
        addressFuriganaFull = `${result.kana1} ${result.kana2} ${result.kana3}`;
      (document.getElementById(addressId).value = addressFull),
        (document.getElementById(addressFuriganaId).value =
          addressFuriganaFull);
      const evt = new Event("input");
      document.getElementById(addressId).dispatchEvent(evt),
        document.getElementById(addressFuriganaId).dispatchEvent(evt);
    } catch (e) {
      console.error("郵便番号APIエラー:", e),
        alert("エラーが発生しました。時間をおいて再度お試しください。");
    }
  }
  const postalCodeInput = document.getElementById("input-postal-code");
  postalCodeInput.addEventListener("blur", () => {
    fetchAndSetAddress(
      postalCodeInput.value,
      "input-address",
      "input-address-furigana"
    );
  });
  const altPostalCodeInput = document.getElementById("input-alt-postal-code");
  altPostalCodeInput.addEventListener("blur", () => {
    fetchAndSetAddress(
      altPostalCodeInput.value,
      "input-alt-address",
      "input-alt-address-furigana"
    );
  });
})();
