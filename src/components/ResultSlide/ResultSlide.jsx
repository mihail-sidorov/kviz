import './ResultSlide.scss';

import NextSlideBtn from "../NextSlideBtn/NextSlideBtn";
import resultCatBad from '../../imgs/result-slide__square-img-cat-bad.svg';
import resultCatMiddle from '../../imgs/result-slide__square-img-cat-middle.svg';
import resultCatGood from '../../imgs/result-slide__square-img-cat-good.svg';
import resultDogBad from '../../imgs/result-slide__square-img-dog-bad.svg';
import resultDogMiddle from '../../imgs/result-slide__square-img-dog-middle.svg';
import resultDogGood from '../../imgs/result-slide__square-img-dog-good.svg';

export default function ResultSlide(props) {
    let img;
    if (props.animal === 'cat') {
        if (props.calculateResult === 'bad') img = resultCatBad;
        if (props.calculateResult === 'middle') img = resultCatMiddle;
        if (props.calculateResult === 'good') img = resultCatGood;
    }
    if (props.animal === 'dog') {
        if (props.calculateResult === 'bad') img = resultDogBad;
        if (props.calculateResult === 'middle') img = resultDogMiddle;
        if (props.calculateResult === 'good') img = resultDogGood;
    }

    return (
        <div className="result-slide">
            <div className="result-slide__back-background">
                <div className="result-slide__front-background">
                    <div className="result-slide__wrapper">
                        <div className="result-slide__wrapper-left">
                            <div className="result-slide__square">
                                <div className="result-slide__square-img">
                                    <img src={img} />
                                </div>
                                <div className="result-slide__square-title">
                                    {props.result[props.animal][props.calculateResult].title}
                                </div>
                                <div className="result-slide__square-text">
                                    {props.result[props.animal][props.calculateResult].text}
                                </div>
                                <div className="result-slide__square-arrow"></div>
                            </div>
                            <div className="result-slide__share">
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_inst share-btn share-btn_inst"></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_vk share-btn share-btn_vk"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.open(`https://vk.com/share.php?url=${window.encodeURIComponent(window.location.href)}&title=${window.encodeURIComponent('?????????? ????????')}&image=${window.encodeURIComponent('https://i.pinimg.com/236x/ec/48/d1/ec48d196481d73fdd8be26872c6ec1e7--wallpaper-backgrounds-wallpapers.jpg')}`, '?????????? ????????', 'width=640,height=480');
                                    }}
                                ></a>
                                <a href="#" className="result-slide__share-btn result-slide__share-btn_fb share-btn share-btn_fb"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.open(`https://www.facebook.com/sharer.php?u=${window.encodeURIComponent(window.location.href)}`, '?????????? ????????', 'width=640,height=480');
                                    }}
                                >
                                    <div className="result-slide__share-arrow"></div>
                                </a>
                            </div>
                        </div>
                        <div className="result-slide__wrapper-send">
                            <div className="result-slide__wrapper-send-title">
                                ???? ???????????????? ???????? ??????????????!
                            </div>
                            <div className="result-slide__wrapper-send-btn">
                                <NextSlideBtn text="???????????????? ??????????????"
                                    callback={() => {

                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="result-slide__site">
                <div className="result-slide__site-wrapper section">
                    <span>
                        ?????????????????? ???????????????????? ???????? ?? ?????????????? ?????????????? ?????????????????? ?????????????????????? <a href="https://karmypet.ru/" target="_blank">???? ?????????? Karmy</a>
                    </span>
                </div>
            </div>
        </div>
    );
}