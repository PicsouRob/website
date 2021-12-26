import crossApp from '../Images/app.svg';
import design from '../Images/design.svg';
import website from '../Images/website.svg';

export const data = [
    {
        name: "Website Application",
        image: website,
        text: "Let me create your website"
    },
    {
        name: "Cross-Platform App",
        image: crossApp,
        text: "The App You needed for your business"
    },
    {
        name: "Design UI|UX",
        image: design,
        text: "Hire me for your design of your product."
    },
];

export const openMail = () => {
    window.open('mailto:www.phanordpicsouroberto11@gmail.com?subject=Services&body=Salut Roberto');
}