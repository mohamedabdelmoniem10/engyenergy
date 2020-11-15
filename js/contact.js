let contact = document.getElementById('contact');

contact.innerHTML = `<div class="container">
<div class="contact__heading">
    <h2 class="section__heading">
        contact
    </h2>
</div>
<div class="row">
    <div class="col-md-6 col-12">
        <div class="contact__form">
            <form class="contact__form-form">
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" autocomplete="off" name="name" id="name">
                </div>
                <div class="form-group">
                    <label for="phone">number</label>
                    <input type="tel" id="phone" autocomplete="off" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                </div>
                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" name="email" autocomplete="off" id="email">
                </div>
                <div class="form-group">
                    <label for="message">message</label>
                    <textarea name="message" id="message" autocomplete="off"></textarea>
                </div>
                <button class="contact__form-form--submit-btn">submit</button>
            </form>
        </div>
    </div>
    <div class="col-md-6 col-12">
        <div class="contact__info">
            <h5 class="contact__info--heading">
                engy legal name company ltd.
            </h5>
            <div class="contact__info--mail contact__info--item">
                <i class="fas fa-envelope-open-text icon"></i>
                <p class="normal_text">
                    info@engyabuzanadah.com
                </p>
            </div>
            <div class="contact__info--phone contact__info--item">
                <i class="fas fa-mobile-alt icon"></i>
                <p class="normal_text">
                    +966 55 449 9077
                </p>
            </div>
            <div class="contact__info--address contact__info--item">
                <i class="far fa-address-card icon"></i>
                <p class="normal_text">
                    P.O Box XxXx, Jeddah XxXxXx, Saudi Arabia
                </p>
            </div>
            <div class="contact__info--sociel-icons  contact__info--item">
                <a href="#" class="sociel-link instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="sociel-link youtube">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="#" class="sociel-link twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="sociel-link facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="sociel-link linkedin">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="sociel-link snapchat">
                    <i class="fab fa-snapchat-ghost"></i>
                </a>
            </div>
        </div>
    </div>
</div>
</div>`;