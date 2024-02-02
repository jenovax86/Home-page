function toggleSearchIcon() {
    const searchInput = document.getElementById("search-wrapper");
    const searchIcon = document.getElementById("search");
    const wrapper = document.getElementById("wrapper");
    let isVisible = false;

    searchIcon.addEventListener('click', (event) => {

        isVisible = !isVisible

        if (isVisible) {
            wrapper.classList.add('search-blur');
            searchInput.style.visibility = 'visible';
            searchInput.style.opacity = '1';
        } else {
            wrapper.classList.remove('search-blur');
            searchInput.style.visibility = 'hidden';
            searchInput.style.opacity = '0';
        }

       

        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && isVisible) {
            wrapper.classList.remove('search-blur');
            searchInput.style.visibility = 'hidden';
            searchInput.style.opacity = '0';
            isVisible = false;
        }
    });
}

function toggleAccountIcon() {
    const accountWrapper = document.getElementById("account-wrapper");
    const wrapper = document.getElementById("wrapper");
    const accountIcon = document.getElementById("account");
    let isVisible = false;
    accountIcon.addEventListener('click', (event) => {
        isVisible = !isVisible
        if (isVisible) {
            wrapper.classList.add('account-blur');
            accountWrapper.style.visibility = 'visible';
            accountWrapper.style.opacity = '1';
        } else {
            wrapper.classList.remove('account-blur');
            accountWrapper.style.visibility = 'hidden';
            accountWrapper.style.opacity = '0';
        }

        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!accountWrapper.contains(event.target) && isVisible) {
            wrapper.classList.remove('account-blur');
            accountWrapper.style.visibility = 'hidden';
            accountWrapper.style.opacity = '0';
            isVisible = false;
        }
    });
}

const searchIcon = document.addEventListener('DOMContentLoaded', toggleSearchIcon());
const accountIcon = document.addEventListener('DOMContentLoaded', toggleAccountIcon());
