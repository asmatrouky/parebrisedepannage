class AppointmentFormComponent extends HTMLElement {
	constructor() {
		super();
		this.currentStep = 1;
		this.totalSteps = 2;
	}

	connectedCallback() {
		this.innerHTML = `
            <!-- Auto Glass Appointment Form -->
            <div class="appointment-form-overlay" id="appointmentFormOverlay">
                <div class="appointment-form-container">
                    <div class="appointment-form-header">
                        <button class="close-form" onclick="this.closest('appointment-form-component').closeAppointmentForm()">&times;</button>
                        <h2>Prenez rendez-vous en toute simplicité</h2>
                        <p>Notre équipe vous contactera rapidement pour confirmer votre rendez-vous</p>
                    </div>
                    
                    <div class="appointment-form-content">
                        <!-- Step Indicator -->
                        <div class="step-indicator">
                            <div class="step-item">
                                <div class="step-number active" id="step1Number">1</div>
                                <div class="step-title">Évaluation des dégâts</div>
                            </div>
                            <div class="step-item">
                                <div class="step-number" id="step2Number">2</div>
                                <div class="step-title">Informations personnelles</div>
                            </div>
                        </div>

                        <form id="appointmentForm">
                            <!-- Step 1: Glass and Damage Selection -->
                            <div class="form-step active" id="step1">
                                <h3>Que voyez-vous sur le vitrage concerné ?</h3>
                                <div class="damage-visual-selection">
                                    <div class="damage-visual-option" data-damage="crack">
                                        <div class="damage-image-container">
                                            <img src="img/damage/cracks.png" alt="Fissures" class="damage-image">
                                        </div>
                                        <div class="damage-label">
                                            <strong>Fissures</strong>
                                            <p>Lignes de cassure visibles</p>
                                        </div>
                                    </div>
                                    
                                    <div class="damage-visual-option" data-damage="impact">
                                        <div class="damage-image-container">
                                            <img src="img/damage/casted.png" alt="Impact/Éclat" class="damage-image">
                                        </div>
                                        <div class="damage-label">
                                            <strong>Impact/Éclat</strong>
                                            <p>Point d'impact ou cassure localisée</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <input type="hidden" id="damageType" name="damageType" required>
                                
                                <h3 style="margin-top: 30px;">Quel type de vitrage est endommagé ?</h3>
                                <div class="glass-type-selection">
                                    <div class="glass-type-row">
                                        <div class="glass-type-option" data-window="front">
                                            <div class="glass-image-container">
                                                <img src="img/damage/front.png" alt="Pare-brise avant" class="glass-image">
                                            </div>
                                            <div class="glass-label">
                                                <strong>Pare-brise avant</strong>
                                                <p>Windscreen front</p>
                                            </div>
                                        </div>
                                        
                                        <div class="glass-type-option" data-window="rear">
                                            <div class="glass-image-container">
                                                <img src="img/damage/back.png" alt="Lunette arrière" class="glass-image">
                                            </div>
                                            <div class="glass-label">
                                                <strong>Lunette arrière</strong>
                                                <p>Rear window</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="glass-type-row">
                                        <div class="glass-type-option" data-window="side">
                                            <div class="glass-image-container">
                                                <img src="img/damage/aspects.png" alt="Vitres latérales" class="glass-image">
                                            </div>
                                            <div class="glass-label">
                                                <strong>Vitres latérales</strong>
                                                <p>Side windows</p>
                                            </div>
                                        </div>
                                        
                                        <div class="glass-type-option" data-window="sunroof">
                                            <div class="glass-image-container">
                                                <img src="img/damage/glasstop.png" alt="Toit ouvrant" class="glass-image">
                                            </div>
                                            <div class="glass-label">
                                                <strong>Toit ouvrant</strong>
                                                <p>Sunroof</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <input type="hidden" id="selectedWindow" name="selectedWindow" required>
                                
                                <div class="form-group" style="margin-top: 30px;">
                                    <label class="form-label required" for="vehicleInfo">Immatriculation ou modèle du véhicule</label>
                                    <input type="text" class="form-control" id="vehicleInfo" name="vehicleInfo" placeholder="Ex: AB-123-CD ou Peugeot 308" required>
                                </div>
                            </div>

                            <!-- Step 2: Personal Information -->
                            <div class="form-step" id="step2">
                                <h3>Vos informations</h3>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label class="form-label required" for="firstName">Prénom</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" required>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label required" for="lastName">Nom</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label required" for="email">Adresse e-mail</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label class="form-label required" for="phone">Numéro de téléphone</label>
                                        <input type="tel" class="form-control" id="phone" name="phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label required" for="postalCode">Code postal</label>
                                        <input type="text" class="form-control" id="postalCode" name="postalCode" pattern="[0-9]{5}" required>
                                    </div>
                                </div>
                                
                                <div class="checkbox-group">
                                    <input type="checkbox" id="dataConsent" name="dataConsent" required>
                                    <label for="dataConsent">
                                        J'accepte que mes données personnelles soient utilisées pour le traitement de ma demande de rendez-vous. 
                                        Ces informations ne seront pas transmises à des tiers et seront utilisées uniquement dans le cadre de nos services.
                                    </label>
                                </div>
                            </div>

                            <!-- Navigation -->
                            <div class="form-navigation">
                                <button type="button" class="btn btn-secondary" onclick="this.closest('appointment-form-component').closeAppointmentForm()">Fermer</button>
                                <div style="display: flex; gap: 10px; justify-content: flex-end; flex-grow: 1;">
                                    <button type="button" class="btn btn-secondary" id="prevBtn" style="display: none;">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="nextBtn">Suivant</button>
                                    <button type="submit" class="btn btn-primary" id="submitBtn" style="display: none;">Demander un rappel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

		this.initializeEventListeners();
		this.addStyles();
	}

	addStyles() {
		if (document.getElementById('appointment-form-styles')) {
			return; // Styles déjà ajoutés
		}

		const style = document.createElement('style');
		style.id = 'appointment-form-styles';
		style.textContent = `
            /* Auto Glass Appointment Form Styles */
            .appointment-form-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 9999;
                display: none;
                align-items: center;
                justify-content: center;
            }
            
            .appointment-form-container {
                background: white;
                border-radius: 12px;
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .appointment-form-header {
                background: linear-gradient(135deg, #8B5CF6, #7C3AED);
                color: white;
                padding: 20px;
                border-radius: 12px 12px 0 0;
                text-align: center;
                position: relative;
            }
            
            .appointment-form-header h2 {
                margin: 0 0 10px 0;
                font-size: 24px;
                font-weight: 600;
            }
            
            .appointment-form-header p {
                margin: 0;
                opacity: 0.9;
                font-size: 14px;
            }
            
            .appointment-form-content {
                padding: 30px;
            }
            
            .form-step {
                display: none;
            }
            
            .form-step.active {
                display: block;
            }
            
            .step-indicator {
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
            }
            
            .step-item {
                display: flex;
                align-items: center;
                margin: 0 10px;
            }
            
            .step-number {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #ecf0f1;
                color: #7f8c8d;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                margin-right: 8px;
            }
            
            .step-number.active {
                background: #8B5CF6;
                color: white;
            }
            
            .step-number.completed {
                background: #7C3AED;
                color: white;
            }
            
            .step-title {
                font-size: 14px;
                color: #34495e;
            }

            /* Visual Damage Selection Styles */
            .damage-visual-selection {
                display: flex;
                gap: 20px;
                justify-content: center;
                flex-wrap: wrap;
                margin: 20px 0;
            }

            .damage-visual-option {
                flex: 1;
                max-width: 250px;
                min-width: 200px;
                border: 3px solid #ecf0f1;
                border-radius: 15px;
                padding: 20px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                background: #ffffff;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            .damage-visual-option:hover {
                border-color: #8B5CF6;
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
            }

            .damage-visual-option.selected {
                border-color: #8B5CF6;
                background: linear-gradient(135deg, #f8f4ff, #f3e8ff);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
            }

            .damage-image-container {
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
                background: #f8f9fa;
                border-radius: 10px;
                overflow: hidden;
            }

            .damage-image {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }

            .damage-label strong {
                display: block;
                font-size: 16px;
                color: #2c3e50;
                margin-bottom: 5px;
            }

            .damage-label p {
                margin: 0;
                color: #7f8c8d;
                font-size: 14px;
            }

            /* Glass Type Selection Styles */
            .glass-type-selection {
                margin: 20px 0;
            }

            .glass-type-row {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-bottom: 15px;
                flex-wrap: wrap;
            }

            .glass-type-option {
                flex: 1;
                max-width: 200px;
                min-width: 150px;
                border: 3px solid #ecf0f1;
                border-radius: 12px;
                padding: 15px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                background: #ffffff;
                box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            }

            .glass-type-option:hover {
                border-color: #8B5CF6;
                transform: translateY(-1px);
                box-shadow: 0 3px 12px rgba(139, 92, 246, 0.15);
            }

            .glass-type-option.selected {
                border-color: #8B5CF6;
                background: linear-gradient(135deg, #f8f4ff, #f3e8ff);
                transform: translateY(-1px);
                box-shadow: 0 3px 12px rgba(139, 92, 246, 0.25);
            }

            .glass-image-container {
                width: 100%;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                background: #f8f9fa;
                border-radius: 8px;
                overflow: hidden;
            }

            .glass-image {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }

            .glass-label strong {
                display: block;
                font-size: 14px;
                color: #2c3e50;
                margin-bottom: 3px;
            }

            .glass-label p {
                margin: 0;
                color: #7f8c8d;
                font-size: 12px;
            }
            
            .form-group {
                margin-bottom: 20px;
            }
            
            .form-label {
                display: block;
                margin-bottom: 5px;
                font-weight: 500;
                color: #2c3e50;
            }
            
            .required::after {
                content: " *";
                color: #e74c3c;
            }
            
            .form-control {
                width: 100%;
                padding: 12px;
                border: 2px solid #ecf0f1;
                border-radius: 6px;
                font-size: 14px;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
            }
            
            .form-control:focus {
                border-color: #8B5CF6;
                outline: none;
            }
            
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }
            
            .checkbox-group {
                display: flex;
                align-items: flex-start;
                margin: 20px 0;
            }
            
            .checkbox-group input[type="checkbox"] {
                margin-right: 10px;
                margin-top: 3px;
            }
            
            .form-navigation {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ecf0f1;
            }
            
            .btn {
                padding: 12px 24px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                border: none;
            }
            
            .btn-secondary {
                background: #95a5a6;
                color: white;
            }
            
            .btn-secondary:hover {
                background: #7f8c8d;
            }
            
            .btn-primary {
                background: #8B5CF6;
                color: white;
            }
            
            .btn-primary:hover {
                background: #7C3AED;
            }
            
            .close-form {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            
            .close-form:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 768px) {
                .appointment-form-container {
                    width: 95%;
                    margin: 10px;
                    max-height: 95vh;
                }
                
                .appointment-form-header {
                    padding: 15px;
                }
                
                .appointment-form-header h2 {
                    font-size: 20px;
                }
                
                .appointment-form-content {
                    padding: 20px;
                }
                
                .form-row {
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
                
                .step-indicator {
                    flex-direction: row;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .step-item {
                    margin: 0 15px;
                    text-align: center;
                }
                
                .step-title {
                    font-size: 12px;
                    margin-top: 5px;
                }
                
                .form-navigation {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .form-navigation .btn {
                    width: 100%;
                    order: 2;
                }
                
                .form-navigation #prevBtn {
                    order: 1;
                }
                
                .checkbox-group {
                    margin: 15px 0;
                }
                
                .checkbox-group label {
                    font-size: 13px;
                    line-height: 1.4;
                }

                /* Mobile styles for visual damage selection */
                .damage-visual-selection {
                    flex-direction: column;
                    gap: 15px;
                }

                .damage-visual-option {
                    min-width: auto;
                    max-width: none;
                }

                .damage-image-container {
                    height: 100px;
                }

                /* Mobile styles for glass type selection */
                .glass-type-row {
                    flex-direction: column;
                    gap: 10px;
                }

                .glass-type-option {
                    min-width: auto;
                    max-width: none;
                }

                .glass-image-container {
                    height: 70px;
                }

                .glass-label strong {
                    font-size: 13px;
                }

                .glass-label p {
                    font-size: 11px;
                }
            }
            
            @media (max-width: 480px) {
                .appointment-form-container {
                    width: 98%;
                    margin: 5px;
                    border-radius: 8px;
                }
                
                .appointment-form-header {
                    padding: 12px;
                    border-radius: 8px 8px 0 0;
                }
                
                .appointment-form-header h2 {
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                
                .appointment-form-header p {
                    font-size: 13px;
                }
                
                .appointment-form-content {
                    padding: 15px;
                }
                
                .step-indicator {
                    margin-bottom: 15px;
                }
                
                .step-item {
                    margin: 0 10px;
                }
                
                .step-number {
                    width: 25px;
                    height: 25px;
                    font-size: 12px;
                }
                
                .step-title {
                    font-size: 11px;
                }
                
                .form-group {
                    margin-bottom: 15px;
                }
                
                .form-control {
                    padding: 10px;
                    font-size: 16px; /* Prevents zoom on iOS */
                }
                
                .btn {
                    padding: 12px 20px;
                    font-size: 14px;
                }
                
                h3 {
                    font-size: 18px;
                    margin-bottom: 15px;
                }
            }
            
            /* Touch improvements for mobile */
            @media (hover: none) and (pointer: coarse) {
                .glass-type-option, .damage-visual-option {
                    touch-action: manipulation;
                }
                
                .glass-type-option:active, .damage-visual-option:active {
                    transform: scale(0.98);
                }
                
                .btn:active {
                    transform: scale(0.98);
                }
            }
        `;

		document.head.appendChild(style);
	}

	initializeEventListeners() {
		const overlay = this.querySelector('#appointmentFormOverlay');
		const form = this.querySelector('#appointmentForm');
		const nextBtn = this.querySelector('#nextBtn');
		const prevBtn = this.querySelector('#prevBtn');

		// Navigation du formulaire
		nextBtn.addEventListener('click', () => this.nextStep());
		prevBtn.addEventListener('click', () => this.previousStep());

		// Sélection du type de vitrage
		this.querySelectorAll('.glass-type-option').forEach(option => {
			option.addEventListener('click', (e) => {
				e.preventDefault();
				this.querySelectorAll('.glass-type-option.selected').forEach(el => el.classList.remove('selected'));
				option.classList.add('selected');
				this.querySelector('#selectedWindow').value = option.dataset.window;

				if (navigator.vibrate) {
					navigator.vibrate(50);
				}
			});
		});

		// Sélection du type de dégât
		this.querySelectorAll('.damage-visual-option').forEach(option => {
			option.addEventListener('click', (e) => {
				e.preventDefault();
				this.querySelectorAll('.damage-visual-option.selected').forEach(el => el.classList.remove('selected'));
				option.classList.add('selected');
				this.querySelector('#damageType').value = option.dataset.damage;

				if (navigator.vibrate) {
					navigator.vibrate(50);
				}
			});
		});

		// Soumission du formulaire
		form.addEventListener('submit', (e) => this.handleSubmit(e));

		// Fermer en cliquant en dehors (desktop)
		overlay.addEventListener('click', (e) => {
			if (e.target === overlay && window.innerWidth > 768) {
				this.closeAppointmentForm();
			}
		});

		// Touche Escape
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && overlay.style.display === 'flex') {
				this.closeAppointmentForm();
			}
		});

		// Empêcher le zoom sur iOS
		if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
			const inputs = this.querySelectorAll('input, select, textarea');
			inputs.forEach(input => {
				input.addEventListener('focus', function () {
					this.style.fontSize = '16px';
				});
			});
		}
	}

	openAppointmentForm() {
		const overlay = this.querySelector('#appointmentFormOverlay');
		overlay.style.display = 'flex';
		this.resetForm();
		document.body.style.overflow = 'hidden';
	}

	closeAppointmentForm() {
		const overlay = this.querySelector('#appointmentFormOverlay');
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}

	resetForm() {
		this.currentStep = 1;
		this.updateStepDisplay();
		this.querySelector('#appointmentForm').reset();

		this.querySelectorAll('.glass-type-option.selected').forEach(el => el.classList.remove('selected'));
		this.querySelectorAll('.damage-visual-option.selected').forEach(el => el.classList.remove('selected'));
	}

	updateStepDisplay() {
		// Cacher toutes les étapes
		this.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));

		// Afficher l'étape courante
		this.querySelector('#step' + this.currentStep).classList.add('active');

		// Mettre à jour les indicateurs
		for (let i = 1; i <= this.totalSteps; i++) {
			const stepNumber = this.querySelector('#step' + i + 'Number');
			stepNumber.classList.remove('active', 'completed');

			if (i < this.currentStep) {
				stepNumber.classList.add('completed');
			} else if (i === this.currentStep) {
				stepNumber.classList.add('active');
			}
		}

		// Boutons de navigation
		this.querySelector('#prevBtn').style.display = this.currentStep === 1 ? 'none' : 'inline-block';
		this.querySelector('#nextBtn').style.display = this.currentStep === this.totalSteps ? 'none' : 'inline-block';
		this.querySelector('#submitBtn').style.display = this.currentStep === this.totalSteps ? 'inline-block' : 'none';
	}

	nextStep() {
		if (this.validateCurrentStep()) {
			if (this.currentStep < this.totalSteps) {
				this.currentStep++;
				this.updateStepDisplay();
				if (window.innerWidth <= 768) {
					this.querySelector('.appointment-form-content').scrollTop = 0;
				}
			}
		}
	}

	previousStep() {
		if (this.currentStep > 1) {
			this.currentStep--;
			this.updateStepDisplay();
			if (window.innerWidth <= 768) {
				this.querySelector('.appointment-form-content').scrollTop = 0;
			}
		}
	}

	validateCurrentStep() {
		if (this.currentStep === 1) {
			const selectedWindow = this.querySelector('#selectedWindow').value;
			const damageType = this.querySelector('#damageType').value;
			const vehicleInfo = this.querySelector('#vehicleInfo').value;

			if (!selectedWindow) {
				this.showMobileAlert('Veuillez sélectionner la vitre endommagée');
				return false;
			}
			if (!damageType) {
				this.showMobileAlert('Veuillez sélectionner le type de dégâts');
				return false;
			}
			if (!vehicleInfo.trim()) {
				this.showMobileAlert('Veuillez renseigner l\'immatriculation ou le modèle du véhicule');
				return false;
			}
		}
		return true;
	}

	showMobileAlert(message) {
		alert(message);
	}

	handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const appointmentData = {};
		for (let [key, value] of formData.entries()) {
			appointmentData[key] = value;
		}

		const windowLabels = {
			'front': 'Pare-brise avant',
			'rear': 'Lunette arrière',
			'side': 'Vitres latérales',
			'sunroof': 'Toit ouvrant'
		};

		const damageLabels = {
			'crack': 'Fissures',
			'impact': 'Impact/Éclat'
		};

		appointmentData.windowLabel = windowLabels[appointmentData.selectedWindow];
		appointmentData.damageLabel = damageLabels[appointmentData.damageType];

		console.log('Appointment Data:', appointmentData);

		this.sendEmailToServer(appointmentData);
	}

	// 👉 NOUVELLE MÉTHODE : envoi des données à l'API Next (/api/sendMail)
	async sendEmailToServer(data) {
		try {
			const response = await fetch('/api/sendMail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				alert('Votre demande de rendez-vous a bien été envoyée. Notre équipe vous contactera rapidement.');
				this.closeAppointmentForm();
			} else {
				alert("Une erreur est survenue lors de l’envoi de votre demande. Merci de réessayer plus tard.");
			}
		} catch (error) {
			console.error('Erreur lors de l’envoi de la demande :', error);
			alert("Impossible d’envoyer la demande pour le moment.");
		}
	}
}

// Enregistrer le custom element
customElements.define('appointment-form-component', AppointmentFormComponent);

// Accès global pour l’ouvrir depuis la navbar
window.openAppointmentForm = function () {
	const formComponent = document.querySelector('appointment-form-component');
	if (formComponent) {
		formComponent.openAppointmentForm();
	}
};

window.displayPanelFormCallback = function () {
	window.openAppointmentForm();
};
