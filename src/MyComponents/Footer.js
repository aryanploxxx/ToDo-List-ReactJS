export const Footer = () => {
    // let footerStyle ={
    //     position: "relative",
    //     width: "100%",
    //     top: "100vh"
    // }
    return (
        // <footer className="bg-dark text-light text-center py-3" style={footerStyle}>
        <footer className="bg-dark text-light text-center py-3">
            <p>Copyright &copy; mytodolist.com</p>
        </footer>
    );
}

/*
    export default Footer;
    -> will export in default format
    -> import Footer from './MyComponents/Footer';

    export const Footer = () => { }
    -> will export it in named footer format, this will export the function as a variable and hence you would have to use curly braces to use the variable 
    -> import {Footer} from './MyComponents/Footer';
*/