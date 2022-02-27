
			// ========= 登入 & 註冊視窗展開關閉 =========
			let shadow;
			window.onload = function () {
				shadow = document.getElementsByClassName("shadow")[0];
			};
			function showDialog() {
				shadow.style.display = "block";
				// ================ 預設是登入頁簽 ================
				document.getElementById("defaultOpen").click();
			}
			function closeDialog() {
				shadow.style.display = "none";
			}

			let out = document.getElementsByClassName("out");
			out[0].addEventListener("click", function (e) {
				e.stopPropagation();
			});

			// ================ 切換登入/註冊頁簽 ================
			function openLogin(evt, tabsName) {
				// console.log("ee");
				// Declare all variables
				var tabContent, tabLinks;

				//================ 先將內容兩個頁簽都隱藏 ================
				tabContent = document.getElementsByClassName("tab-content");
				for (i = 0; i < tabContent.length; i++) {
					tabContent[i].style.display = "none";
				}

				// ================ 切換頁簽時的style背景變色 ================
				tabLinks = document.getElementsByClassName("tab-links");
				for (i = 0; i < tabLinks.length; i++) {
					tabLinks[i].className = tabLinks[i].className.replace(" -on", "");
				}

				// ================ 點擊到的頁簽要打開 ================
				document.getElementById(tabsName).style.display = "block";
				evt.currentTarget.className += " -on";
			}
