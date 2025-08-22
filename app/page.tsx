import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <header>
        <nav class="container">
            <a href="#" class="logo">ORION</a>
            <ul class="nav-links">
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <a href="#contact" class="cta-button">Get Quote</a>
        </nav>
    </header>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Safety & Process Reliability for Industry</h1>
                    <p class="subtitle">Delivering proven gas detection, leak monitoring, and process equipment solutions since 1991. Trusted by industry leaders across Ukraine and beyond.</p>
                    
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-number">30+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">2,500+</span>
                            <span class="stat-label">Product Variants</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">100+</span>
                            <span class="stat-label">Enterprise Clients</span>
                        </div>
                    </div>
                    
                    <div class="cta-buttons">
                        <a href="#solutions" class="cta-button">Explore Solutions</a>
                        <a href="#contact" class="cta-button-secondary">Request Demo</a>
                    </div>
                </div>
                
                <div class="hero-image">
                    <div class="device-showcase pulse">
                        <div class="device-placeholder">
                            DOZOR-S Series Gas Analyzer
                        </div>
                        <h3>DOZOR-S Series</h3>
                        <p>Microprocessor-based gas analyzers with 150+ detectable substances</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="trust-section">
        <div class="container">
            <div class="trust-content">
                <p class="trust-title">Trusted by Industry Leaders</p>
                <div class="client-logos">
                    <div class="client-logo">UKRTRANSGAZ</div>
                    <div class="client-logo">MOTORSICH JSC</div>
                    <div class="client-logo">KRIVOROZHSTAL</div>
                    <div class="client-logo">UKRTELECOM</div>
                    <div class="client-logo">UKRTATNAFTA</div>
                </div>
            </div>
        </div>
    </section>
    <section class="solutions" id="solutions">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Complete Safety & Process Solutions</h2>
                <p class="section-subtitle">From gas detection to process optimization, we deliver integrated solutions that protect your people, assets, and operations.</p>
            </div>
            
            <div class="solutions-grid">
                <div class="solution-card">
                    <div class="solution-icon">🔍</div>
                    <h3 class="solution-title">Gas Detection</h3>
                    <p class="solution-description">Advanced DOZOR-S series analyzers for combustible and toxic gases with microprocessor-based precision.</p>
                    <ul class="solution-features">
                        <li>150+ detectable substances</li>
                        <li>Stationary, portable & individual units</li>
                        <li>Real-time monitoring & alerts</li>
                        <li>Certified for industrial use</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
                
                <div class="solution-card">
                    <div class="solution-icon">💧</div>
                    <h3 class="solution-title">Leak Detection</h3>
                    <p class="solution-description">Precise leak detection systems for early identification and prevention of costly industrial incidents.</p>
                    <ul class="solution-features">
                        <li>High-sensitivity detection</li>
                        <li>Multiple sensing technologies</li>
                        <li>Automated alarm systems</li>
                        <li>Remote monitoring capability</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
                
                <div class="solution-card">
                    <div class="solution-icon">📊</div>
                    <h3 class="solution-title">Flow Measurement</h3>
                    <p class="solution-description">Accurate flow measurement systems (DOZOR-S-M-10) for process control and optimization.</p>
                    <ul class="solution-features">
                        <li>Precision measurement</li>
                        <li>Multiple flow types</li>
                        <li>Data logging & analysis</li>
                        <li>Integration ready</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
                
                <div class="solution-card">
                    <div class="solution-icon">📡</div>
                    <h3 class="solution-title">Telemetry & Monitoring</h3>
                    <p class="solution-description">Complete telemetry solutions including GRP complexes, GSM sensors, and cathodic protection systems.</p>
                    <ul class="solution-features">
                        <li>Remote data collection</li>
                        <li>Real-time monitoring</li>
                        <li>Automated reporting</li>
                        <li>Emergency shutdown systems</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
                
                <div class="solution-card">
                    <div class="solution-icon">🧲</div>
                    <h3 class="solution-title">Magnetic Treatment</h3>
                    <p class="solution-description">Advanced magnetic water treatment devices and converters to prevent scaling and optimize processes.</p>
                    <ul class="solution-features">
                        <li>Scale prevention</li>
                        <li>Process optimization</li>
                        <li>Maintenance reduction</li>
                        <li>Energy efficiency</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
                
                <div class="solution-card">
                    <div class="solution-icon">⚡</div>
                    <h3 class="solution-title">Power & Energy</h3>
                    <p class="solution-description">Reliable power solutions including inverters and converters for uninterrupted operations.</p>
                    <ul class="solution-features">
                        <li>Backup power systems</li>
                        <li>Power conversion</li>
                        <li>Grid independence</li>
                        <li>System resilience</li>
                    </ul>
                    <a href="#" class="solution-link">Learn More →</a>
                </div>
            </div>
        </div>
    </section>
    <section class="cta-section" id="contact">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Enhance Your Industrial Safety?</h2>
                <p>Get expert consultation on the right safety and process solutions for your facility.</p>
                <div class="cta-buttons">
                    <a href="#" class="cta-button">Request Quote</a>
                    <a href="#" class="cta-button-secondary">Download Catalog</a>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Orion NPP</h3>
                    <p>Scientific and Production Enterprise specializing in industrial safety and process equipment since 1991.</p>
                    <p>Certified for Ukraine, Russia, and Belarus markets.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Solutions</h3>
                    <p><a href="#">Gas Detection Systems</a></p>
                    <p><a href="#">Leak Detection</a></p>
                    <p><a href="#">Flow Measurement</a></p>
                    <p><a href="#">Telemetry Solutions</a></p>
                    <p><a href="#">Magnetic Treatment</a></p>
                </div>
                
                <div class="footer-section">
                    <h3>Resources</h3>
                    <p><a href="#">Technical Documentation</a></p>
                    <p><a href="#">Product Catalogs</a></p>
                    <p><a href="#">Certifications</a></p>
                    <p><a href="#">Support & Service</a></p>
                </div>
                
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>Ukraine</p>
                    <p>Email: info@orion.com.ua</p>
                    <p>Phone: Available on request</p>
                    <p><a href="#">Request Information</a></p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 NPP Orion. All rights reserved. | Established 1991</p>
            </div>
        </div>
    </footer>
    </div>
  );
}
