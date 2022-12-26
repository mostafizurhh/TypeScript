//DOM Manipulation in TypeScript
const myBtn = document.getElementById('submitBtn');
const input = document.getElementById('input') as HTMLInputElement;

const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const p = document.createElement('p');
    p.innerText = input?.value;
    target?.parentNode?.appendChild(p);
}

myBtn?.addEventListener('click', handleClick)