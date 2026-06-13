
import {Link} from 'react-router-dom';

import {useAuth} from "../authentication/AuthProvider";

const Sidebar = () => {

    const auth = useAuth();

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo"/></a>
                <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg"
                                                                                alt="logo"/></a>
            </div>
            <ul className="nav">
                <li className="nav-item profile">
                    <div className="profile-desc">
                        <div className="profile-pic">
                            <div className="count-indicator">
                                <img className="img-xs rounded-circle " src={auth.user?.picture} alt=""/>
                                <span className="count bg-success"></span>
                            </div>
                            <div className="profile-name">
                                <h5 className="mb-0 font-weight-normal">{auth.user?.name}</h5>
                                <span>Gold Member</span>
                            </div>
                        </div>
                        {/* <a href="#" id="profile-dropdown" data-toggle="dropdown"><i
                            className="mdi mdi-dots-vertical"></i></a>
                        <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                             aria-labelledby="profile-dropdown">
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-settings text-primary"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-onepassword  text-info"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-calendar-today text-success"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </li>
                <li className="nav-item nav-category">
                    <span className="nav-link">Navigation</span>
                </li>
                {/*  <li className="nav-item menu-items">*/}
                {/*      <a className="nav-link" href="/">*/}
                {/*<span className="menu-icon">*/}
                {/*  <i className="mdi mdi-speedometer"></i>*/}
                {/*</span>*/}
                {/*          <span className="menu-title">Dashboard</span>*/}
                {/*      </a>*/}
                {/*  </li>*/}
                <li className="nav-item menu-items">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                      <span className="menu-icon">
                        <i className="mdi mdi-laptop"></i>
                      </span>
                        <span className="menu-title">Finance</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"><Link className="nav-link" to="/finance">Overview</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/accounts">Accounts</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/creditcards">CreditCards</Link></li>
                        </ul>
                    </div>
                </li>
                {/*<li className="nav-item menu-items">*/}
                {/*    <a className="nav-link" href="pages/icons/mdi.html">*/}
                {/*<span class="menu-icon">*/}
                {/*<i class="mdi mdi-contacts"></i>*/}
                {/*</span>*/}
                {/*        <span class="menu-title">Health</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li className="nav-item menu-items">*/}
                {/*    <a className="nav-link" href="pages/icons/mdi.html">*/}
                {/*<span class="menu-icon">*/}
                {/*<i class="mdi mdi-contacts"></i>*/}
                {/*</span>*/}
                {/*        <span class="menu-title">Cookbook</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}

export default Sidebar;