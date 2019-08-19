import React from 'react';
import Controller from './controller';
import Image from './../../static/image/ekaapsd.jpg';
export class About extends Controller {
    render() {
        return (<div className="col-12 mt-3">
            <div className="col-12 text-center">
                <img className="picture" src={Image} />
            </div>
            <div className={"cursor-pointer row".concat(this.state.isOpenReady ? " show" : "")}>
                <div className="col-12 mapfields-border pb-3 bg-white" onClick={(e) => this.onClickOpenReady(e)}>
                    <i className="fas fa-angle-right mr-3 rotate"></i><span className="text-18px">Eka Puspa Dewi</span>
                </div>
                <div className="col-12 pl-0 pr-0">
                    <div className="accordion-content">
                        {this.state.dataEka.map((data) => {
                            return (<div className="row">
                                <div className="col-12 bg-born pl-5 pt-3 pb-3">
                                    <div className="row">
                                        <div className="col-auto pl-4">
                                            <i class="fas fa-hospital fa-2x"></i>
                                        </div>
                                        <div className="col-auto pl-0">
                                            <span className="text-white text-18px align-center-long-text">{data.lahir}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-whatsapp pl-5 pt-3 pb-3">
                                    <div className="row">
                                        <div className="col-auto pl-4">
                                            <i class="fab fa-whatsapp fa-2x"></i>
                                        </div>
                                        <div className="col-auto pl-0">
                                            <span className="text-white text-18px align-center-long-text">{data.wa}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-line pl-5 pt-3 pb-3">
                                    <div className="row">
                                        <div className="col-auto pl-4">
                                            <i class="fab fa-line fa-2x"></i>
                                        </div>
                                        <div className="col-auto pl-0">
                                            <a href="http://line.me/ti/p/~Ekaaapd">
                                                <span className="text-white text-18px align-center">{data.idLine}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 bg-instagram pl-5 pt-3 pb-3">
                                    <div className="row">
                                        <div className="col-auto pl-4">
                                            <i class="fab fa-instagram fa-2x"></i>
                                        </div>
                                        <div className="col-auto pl-0">
                                            <a href="https://instagram.com/ekaapsd">
                                                <span className="text-white text-18px align-center">{data.instagram}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        </div>);
    }
}
