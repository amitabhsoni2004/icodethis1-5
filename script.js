let form = document.querySelector(".inputField");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submission prevented!");
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.closest('.element').remove();
    } else if (event.target.closest('.element')) {
        handleElementClick(event.target.closest('.element'));
    }
});

function handleElementClick(element) {
    const elements = document.querySelectorAll(".element");
    elements.forEach(el => {
        el.classList.remove("active");
        el.style.color = "";
        let childSvgs = el.querySelectorAll(".svg");
        childSvgs.forEach(svg => svg.style.color = "");
    });

    element.classList.toggle("active");
    element.style.color = "rgb(29, 116, 249)";
    let svgs = element.querySelectorAll(".svg");
    svgs.forEach(svg => {
        svg.style.color = "rgb(29, 116, 249)";
    });
}

let addBranch = document.querySelector(".addBranch");
let inputField = document.querySelector(".inputField");
let title = document.getElementById("name");
let sendBtn = document.querySelector(".sendBtn");

addBranch.addEventListener("click", () => {
    inputField.style.display = "flex";
});

sendBtn.addEventListener("click", () => {
    const titleValue = title.value.trim();
    if (titleValue !== "") {
        createNewElement(titleValue);
        inputField.style.display = "none";
        title.value = ""; // Clear the input after use
    } else {
        alert("Enter Title First");
    }
});

function createNewElement(titleValue) {
    let asideSection = document.querySelector(".asideSection");
    let element = document.createElement("section");
    element.classList.add('flex', 'flex-row', 'justify-between', 'align-center', 'element');
    element.innerHTML = `<div class="flex flex-row gap0 align-center">
        <div class="blueLine"></div>
        
        <div class="flex flex-row gap20 padding-left">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="svg"
        color="#000000" fill="none">
        <path d="M6.5 17.5L6.5 14.5M11.5 17.5L11.5 8.5M16.5 17.5V13.5" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" />
        <path
            d="M21.5 5.5C21.5 7.15685 20.1569 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 3.84315 16.8431 2.5 18.5 2.5C20.1569 2.5 21.5 3.84315 21.5 5.5Z"
            stroke="currentColor" stroke-width="1.5" />
        <path
            d="M21.4955 11C21.4955 11 21.5 11.3395 21.5 12C21.5 16.4784 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4784 2.5 12C2.5 7.52169 2.5 5.28252 3.89124 3.89127C5.28249 2.50003 7.52166 2.50003 12 2.50003L13 2.5"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
            <p>${titleValue}</p>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                            color="#000000" fill="none" class="delete">
                            <path
                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>`;

    asideSection.appendChild(element);
}

// Initial click simulation on third element (if exists)
document.querySelectorAll(".element")[2]?.click();
