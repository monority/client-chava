 <div className="container block">

                    <div className="content-container">
                        <div className="nav-wrap" >
                            <ul>
                                <li><Link activeClass="active" href='questions fréquentes' className="frequency" to="frequency" offset={-200} spy={true} smooth={true} duration={500}>Questions fréquentes</Link></li>
                                <li><Link activeClass="active" href='Votre animal' className="animals" to="animals" offset={-200} spy={true} smooth={true} duration={500}>Votre animal</Link></li>

                                <li><Link activeClass="active" href='questions utilisateurs' className="users" to="users" offset={-200} spy={true} smooth={true} duration={500}>Utilisateurs</Link></li>
                                <li><Link activeClass="active" href='Questions sur le compte' className="account" to="account" offset={-200} spy={true} smooth={true} duration={500} >Compte</Link></li>
                                <li><Link activeClass="active" href='questions sur la sécurité' className="security" to="security" offset={-200} spy={true} smooth={true} duration={500}>Sécurité</Link></li>
                                <li><Link activeClass="active" href='questions diverses' className="misc" to="misc" offset={-200} spy={true} smooth={true} duration={500}>Divers</Link></li>
                            </ul>
                        </div>
                        <div className="question-container">
                            <div className="title-wrap">
                                <h2>Comment pouvons nous vous aider ?</h2>
                            </div>

                            <div className="collapse-wrap" id="frequency">

                                <h3>Questions fréquemment posées</h3>
                                <Accordeon items={items_frequency} />
                            </div>
                            <div className="collapse-wrap" id="animals">

                                <h3>Votre animal</h3>
                                <Accordeon items={items_animals} />
                            </div>
                            <div className="collapse-wrap" id="users">

                                <h3>Interaction Utilisateurs</h3>
                                <Accordeon items={items_users} />
                            </div>
                            <div className="collapse-wrap" id='account'>

                                <h3>Compte</h3>
                                <Accordeon items={items_account} />
                            </div>
                            <div className="collapse-wrap" id='security'>

                                <h3>Sécurité</h3>
                                <Accordeon items={items_security} />
                            </div>
                            <div className="collapse-wrap" id='misc'>

                                <h3>Divers</h3>
                                <Accordeon items={items_misc} />
                            </div>

                        </div>

                    </div>
                </div>