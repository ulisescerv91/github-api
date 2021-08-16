import React,{useEffect} from 'react';
import './Title.scss'
const Title = () => {

    useEffect(() => {
        console.log('jola')
        const logo = document.querySelectorAll('#logo path')
        for (let index = 0; index < logo.length; index++) {
            console.log(logo[index].getTotalLength())
            
        }
    }, []);

    return (
        <div className='Title'>
            <svg id='logo' width="320" height="60" viewBox="0 0 754 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.12 33.72C81.336 27.864 77.304 23.352 72.024 20.184C66.744 16.92 60.6 15.288 53.592 15.288C46.584 15.288 40.248 16.92 34.584 20.184C29.016 23.352 24.6 27.96 21.336 34.008C18.168 39.96 16.584 46.872 16.584 54.744C16.584 62.616 18.168 69.528 21.336 75.48C24.6 81.432 29.016 86.04 34.584 89.304C40.248 92.472 46.584 94.056 53.592 94.056C63.384 94.056 71.448 91.128 77.784 85.272C84.12 79.416 87.816 71.496 88.872 61.512H48.84V50.856H102.84V60.936C102.072 69.192 99.48 76.776 95.064 83.688C90.648 90.504 84.84 95.928 77.64 99.96C70.44 103.896 62.424 105.864 53.592 105.864C44.28 105.864 35.784 103.704 28.104 99.384C20.424 94.968 14.328 88.872 9.81602 81.096C5.40002 73.32 3.19202 64.536 3.19202 54.744C3.19202 44.952 5.40002 36.168 9.81602 28.392C14.328 20.52 20.424 14.424 28.104 10.104C35.784 5.68798 44.28 3.47998 53.592 3.47998C64.248 3.47998 73.656 6.11998 81.816 11.4C90.072 16.68 96.072 24.12 99.816 33.72H84.12Z" stroke="white" strokeWidth="6"/>
<path d="M133.27 4.63198V105H120.166V4.63198H133.27Z" stroke="white" strokeWidth="6"/>
<path d="M217.38 4.63198V15.288H190.02V105H176.916V15.288H149.412V4.63198H217.38Z" stroke="white" strokeWidth="6"/>
<path d="M310.838 4.63198V105H297.734V59.496H246.614V105H233.51V4.63198H246.614V48.696H297.734V4.63198H310.838Z" stroke="white" strokeWidth="6"/>
<path d="M346.029 4.63198V68.136C346.029 77.064 348.189 83.688 352.509 88.008C356.925 92.328 363.021 94.488 370.797 94.488C378.477 94.488 384.477 92.328 388.797 88.008C393.213 83.688 395.421 77.064 395.421 68.136V4.63198H408.525V67.992C408.525 76.344 406.845 83.4 403.485 89.16C400.125 94.824 395.565 99.048 389.805 101.832C384.141 104.616 377.757 106.008 370.653 106.008C363.549 106.008 357.117 104.616 351.357 101.832C345.693 99.048 341.181 94.824 337.821 89.16C334.557 83.4 332.925 76.344 332.925 67.992V4.63198H346.029Z" stroke="white" strokeWidth="6"/>
<path d="M480.641 53.304C484.289 53.88 487.601 55.368 490.577 57.768C493.649 60.168 496.049 63.144 497.777 66.696C499.601 70.248 500.513 74.04 500.513 78.072C500.513 83.16 499.217 87.768 496.625 91.896C494.033 95.928 490.241 99.144 485.249 101.544C480.353 103.848 474.545 105 467.825 105H430.385V4.63198H466.385C473.201 4.63198 479.009 5.78398 483.809 8.08798C488.609 10.296 492.209 13.32 494.609 17.16C497.009 21 498.209 25.32 498.209 30.12C498.209 36.072 496.577 41.016 493.313 44.952C490.145 48.792 485.921 51.576 480.641 53.304ZM443.489 47.976H465.521C471.665 47.976 476.417 46.536 479.777 43.656C483.137 40.776 484.817 36.792 484.817 31.704C484.817 26.616 483.137 22.632 479.777 19.752C476.417 16.872 471.569 15.432 465.233 15.432H443.489V47.976ZM466.673 94.2C473.201 94.2 478.289 92.664 481.937 89.592C485.585 86.52 487.409 82.248 487.409 76.776C487.409 71.208 485.489 66.84 481.649 63.672C477.809 60.408 472.673 58.776 466.241 58.776H443.489V94.2H466.673Z" stroke="white" strokeWidth="6"/>
<path d="M616.416 82.68H572.64L564.576 105H550.752L587.04 5.20798H602.16L638.304 105H624.48L616.416 82.68ZM612.672 72.024L594.528 21.336L576.384 72.024H612.672Z" stroke="white" strokeWidth="6"/>
<path d="M721.223 34.008C721.223 42.36 718.343 49.32 712.583 54.888C706.919 60.36 698.231 63.096 686.519 63.096H667.223V105H654.119V4.63198H686.519C697.847 4.63198 706.439 7.36798 712.295 12.84C718.247 18.312 721.223 25.368 721.223 34.008ZM686.519 52.296C693.815 52.296 699.191 50.712 702.647 47.544C706.103 44.376 707.831 39.864 707.831 34.008C707.831 21.624 700.727 15.432 686.519 15.432H667.223V52.296H686.519Z" stroke="white" strokeWidth="6"/>
<path d="M750.614 4.63198V105H737.51V4.63198H750.614Z" stroke="white" strokeWidth="6"/>
</svg>

        </div>
    );
}

export default Title;