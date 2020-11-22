function toggleText() {
    const hideText = document.querySelector('.toggle-text-button');
    hideText.addEventListener('click', () => {
        const toggleText = document.querySelector('#text');
        if (toggleText.hasAttribute('hidden', true)) { //Если текст скрыт - показываем его, если текст отображается - наоборот, скрываем
            toggleText.removeAttribute('hidden', true);
        } else {
            toggleText.setAttribute('hidden', true);
        }
    });
}
