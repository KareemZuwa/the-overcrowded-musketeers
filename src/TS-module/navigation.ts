const exportNav = () : HTMLUListElement => {

    const linkData = [
        { text : 'set-timer-form', textLabel : 'ANALOG TIMER'},
        { text : 'digital-timer', textLabel : 'DIGITAL TIMER'},
        { text : 'visual-page', textLabel : 'VISUAL TIMER'},
        { text : 'talTillOrd', textLabel : 'TEXT TIMER'},
        { text : '', textLabel : 'CIRCLES TIMER'}
    ]

    const ul : HTMLUListElement = document.createElement('ul');
    ul.className = "nav";

    for(let i : number = 0; i < linkData.length; i++)
    {
        const li : HTMLLIElement = document.createElement('li');
        const a : HTMLAnchorElement = document.createElement('a');

        a.href = `#${linkData[i].text}`;
        a.innerText = `${linkData[i].textLabel}`;
        li.appendChild(a);
        ul.append(li)
    }

    return ul;
}

const openNav = () => {
    document.querySelector('.sideNav-mySidenav').setAttribute('width', '70%');
    document.querySelector('.backdrop').setAttribute('display', 'block');
}

const closeNav = () => {
    document.querySelector('.sideNav-container').setAttribute('width', '0');
    document.querySelector('.backdrop').setAttribute('display', 'none');
}


export  { exportNav, openNav, closeNav } ;