import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <header>
        <nav className="container">
            <a href="#" className="logo">ORION</a>
            <ul className="nav-links">
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <a href="#contact" className="cta-button">Get Quote</a>
        </nav>
    </header>
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Safety & Process Reliability for Industry</h1>
                    <p className="subtitle">Delivering proven gas detection, leak monitoring, and process equipment solutions since 1991. Trusted by industry leaders across Ukraine and beyond.</p>
                    
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">30+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">2,500+</span>
                            <span className="stat-label">Product Variants</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Enterprise Clients</span>
                        </div>
                    </div>
                    
                    <div className="cta-buttons">
                        <a href="#solutions" className="cta-button">Explore Solutions</a>
                        <a href="#contact" className="cta-button-secondary">Request Demo</a>
                    </div>
                </div>
                
                <div className="hero-image">
                    <div className="device-showcase pulse">
                        <div className="device-placeholder">
                            DOZOR-S Series Gas Analyzer
                        </div>
                        <h3>DOZOR-S Series</h3>
                        <p>Microprocessor-based gas analyzers with 150+ detectable substances</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="trust-section">
        <div className="container">
            <div className="trust-content">
                <p className="trust-title">Trusted by Industry Leaders</p>
                <div className="client-logos">
                    <div className="client-logo">UKRTRANSGAZ</div>
                    <div className="client-logo">MOTORSICH JSC</div>
                    <div className="client-logo">KRIVOROZHSTAL</div>
                    <div className="client-logo">UKRTELECOM</div>
                    <div className="client-logo">UKRTATNAFTA</div>
                </div>
            </div>
        </div>
    </section>
    <section className="solutions" id="solutions">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Complete Safety & Process Solutions</h2>
                <p className="section-subtitle">From gas detection to process optimization, we deliver integrated solutions that protect your people, assets, and operations.</p>
            </div>
            
            <div className="solutions-grid">
                <div className="solution-card">
                    <div className="solution-icon">🔍</div>
                    <h3 className="solution-title">Gas Detection</h3>
                    <p className="solution-description">Advanced DOZOR-S series analyzers for combustible and toxic gases with microprocessor-based precision.</p>
                    <ul className="solution-features">
                        <li>150+ detectable substances</li>
                        <li>Stationary, portable & individual units</li>
                        <li>Real-time monitoring & alerts</li>
                        <li>Certified for industrial use</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
                
                <div className="solution-card">
                    <div className="solution-icon">💧</div>
                    <h3 className="solution-title">Leak Detection</h3>
                    <p className="solution-description">Precise leak detection systems for early identification and prevention of costly industrial incidents.</p>
                    <ul className="solution-features">
                        <li>High-sensitivity detection</li>
                        <li>Multiple sensing technologies</li>
                        <li>Automated alarm systems</li>
                        <li>Remote monitoring capability</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
                
                <div className="solution-card">
                    <div className="solution-icon">📊</div>
                    <h3 className="solution-title">Flow Measurement</h3>
                    <p className="solution-description">Accurate flow measurement systems (DOZOR-S-M-10) for process control and optimization.</p>
                    <ul className="solution-features">
                        <li>Precision measurement</li>
                        <li>Multiple flow types</li>
                        <li>Data logging & analysis</li>
                        <li>Integration ready</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
                
                <div className="solution-card">
                    <div className="solution-icon">📡</div>
                    <h3 className="solution-title">Telemetry & Monitoring</h3>
                    <p className="solution-description">Complete telemetry solutions including GRP complexes, GSM sensors, and cathodic protection systems.</p>
                    <ul className="solution-features">
                        <li>Remote data collection</li>
                        <li>Real-time monitoring</li>
                        <li>Automated reporting</li>
                        <li>Emergency shutdown systems</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
                
                <div className="solution-card">
                    <div className="solution-icon">🧲</div>
                    <h3 className="solution-title">Magnetic Treatment</h3>
                    <p className="solution-description">Advanced magnetic water treatment devices and converters to prevent scaling and optimize processes.</p>
                    <ul className="solution-features">
                        <li>Scale prevention</li>
                        <li>Process optimization</li>
                        <li>Maintenance reduction</li>
                        <li>Energy efficiency</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
                
                <div className="solution-card">
                    <div className="solution-icon">⚡</div>
                    <h3 className="solution-title">Power & Energy</h3>
                    <p className="solution-description">Reliable power solutions including inverters and converters for uninterrupted operations.</p>
                    <ul className="solution-features">
                        <li>Backup power systems</li>
                        <li>Power conversion</li>
                        <li>Grid independence</li>
                        <li>System resilience</li>
                    </ul>
                    <a href="#" className="solution-link">Learn More →</a>
                </div>
            </div>
        </div>
    </section>
    <section className="cta-section" id="contact">
        <div className="container">
            <div className="cta-content">
                <h2>Ready to Enhance Your Industrial Safety?</h2>
                <p>Get expert consultation on the right safety and process solutions for your facility.</p>
                <div className="cta-buttons">
                    <a href="#" className="cta-button">Request Quote</a>
                    <a href="#" className="cta-button-secondary">Download Catalog</a>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Orion NPP</h3>
                    <p>Scientific and Production Enterprise specializing in industrial safety and process equipment since 1991.</p>
                    <p>Certified for Ukraine, Russia, and Belarus markets.</p>
                </div>
                
                <div className="footer-section">
                    <h3>Solutions</h3>
                    <p><a href="#">Gas Detection Systems</a></p>
                    <p><a href="#">Leak Detection</a></p>
                    <p><a href="#">Flow Measurement</a></p>
                    <p><a href="#">Telemetry Solutions</a></p>
                    <p><a href="#">Magnetic Treatment</a></p>
                </div>
                
                <div className="footer-section">
                    <h3>Resources</h3>
                    <p><a href="#">Technical Documentation</a></p>
                    <p><a href="#">Product Catalogs</a></p>
                    <p><a href="#">Certifications</a></p>
                    <p><a href="#">Support & Service</a></p>
                </div>
                
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Ukraine</p>
                    <p>Email: info@orion.com.ua</p>
                    <p>Phone: Available on request</p>
                    <p><a href="#">Request Information</a></p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 NPP Orion. All rights reserved. | Established 1991</p>
            </div>
        </div>
    </footer>
    </div>
  );
}
