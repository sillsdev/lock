export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'Şifrə dəyişdirmə cəhdləriniz sona yetdi. Xahiş edirik, yenidən cəhd etməzdən əvvəl gözləyin.',
      'lock.fallback': 'Üzr istəyirik, şifrəni dəyişdirmək istəyərkən bir səhv baş verib.',
      enterprise_email:
        'E-poçtunuzun domeni təşkilatın şəxsiyyət təminatçısının bir hissəsidir. Şifrənizi yenidən qurmaq üçün təhlükəsizlik menecerinizdən soruşun.'
    },
    login: {
      blocked_user: 'İstifadəçi üçün giriş bağlanıb.',
      invalid_user_password: 'Səhv qeydiyyat məlumatları.',
      'lock.fallback': 'Üzr istəyirik, daxil olmağa çalışarkən bir səhv baş verib.',
      'lock.invalid_code': 'Kod yanlışdır.',
      'lock.invalid_email_password': 'E-poçt və ya şifrə yanlışdır.',
      'lock.invalid_username_password': 'İstifadəçi adı və ya şifrə yanlışdır.',
      'lock.network':
        'Serverlə əlaqə saxlaya bilmədik. Zəhmət olmazsa, bağlantınızı yoxlayın və yenidən cəhd edin.',
      'lock.popup_closed': 'Açılan pəncərə bağlandı. Yenidən cəhd elə.',
      'lock.unauthorized': 'İcazə verilmədi. Yenidən cəhd edin.',
      'lock.mfa_registration_required':
        'Çoxamilli Əsliliyi Yoxlama tələb olunur, lakin cihazınız qeydiyyatdan keçməyib. Zəhmət olmazsa, davam etməzdən əvvəl onu qeydiyyatdan kecirin.',
      'lock.mfa_invalid_code': 'Kod yanlışdır. Zəhmət olmazsa, bir daha cəhd edin.',
      password_change_required:
        'Şifrənizi ilk dəfə daxil etdiyiniz və ya şifrənizin müddəti başa çatdığı üçün onu yeniləməlisiniz.',
      password_leaked:
        'Bu hesabla əlaqəli bir təhlükəsizlik problemi aşkar etdik. Hesabınızı qorumaq üçün bu girişi bağladıq. Hesabınızı yenidən bərpa etmək barədə təlimat olan bir e-poçt göndərildi.',
      too_many_attempts: 'Çoxlu təkrar giriş cəhdlərindən sonra hesabınız bağlandı.',
      too_many_requests:
        'Üzr istəyirik. Hal-hazırda həddən çox sorğular var. Zəhmət olmazsa, səhifəni yenidən yükləyin və yenidən cəhd edin. Bu davam edərsə, daha sonra yenidən cəhd edin.',
      session_missing:
        'Əsliliyi yoxlama sorğunuzu tamamlaya bilmədi. Bütün açıq dialoqları bağladıqdan sonra yenidən cəhd edin',
      'hrd.not_matching_email': 'Giriş üçün korporativ e-poçtunuzdan istifadə edin.'
    },
    passwordless: {
      'bad.email': 'E-poçt yanlışdır',
      'bad.phone_number': 'Telefon nömrəsi yanlışdır',
      'lock.fallback': 'Üzr istəyirik, bir səhv baş verdi'
    },
    signUp: {
      invalid_password: 'Şifrə yanlışdır.',
      'lock.fallback': 'Üzr istəyirik, daxil olmağa cəhd edərkən bir səhv baş verib.',
      password_dictionary_error: 'Şifrə çox adidir.',
      password_no_user_info_error: 'Şifrə istifadəçinin məlumatına əsaslanıb.',
      password_strength_error: 'Şifrə həddən artıq zəifdir.',
      user_exists: 'İstifadəçi artıq mövcuddur.',
      username_exists: 'İstifadəçi adı artıq mövcuddur.',
      social_signup_needs_terms_acception:
        'Davam etmək üçün aşağıdakı Xidmət Şərtləri ilə razılığınızı bildirin.'
    }
  },
  success: {
    logIn: 'Daxil olduğunuz üçün təşəkkür edirik.',
    forgotPassword: 'Şifrənizi yenidən qurmaq üçün sizə bir e-poçt göndərmişik.',
    magicLink: 'Daxil olmaq üçün bir keçid göndərdik <br /> %s-yə.',
    signUp: 'Qeydiyyatdan keçdiyiniz üçün təşəkkür edirik.'
  },
  blankErrorHint: 'Boş ola bilməz',
  captchaCodeInputPlaceholder: 'Yuxarıda göstərilən kodu daxil edin',
  captchaMathInputPlaceholder: 'Yuxarıda göstərilən düsturu həll edin',
  codeInputPlaceholder: 'kodunuz',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'və ya',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'yaxud',
  emailInputPlaceholder: 'sizinki@misal.com',
  enterpriseLoginIntructions: 'Korporativ qeydiyyat məlumatlarınızla daxil olun.',
  enterpriseActiveLoginInstructions:
    'Xahiş edirik %s -da korporativ qeydiyyat məlumatlarınızı daxil edin.',
  failedLabel: 'Alınmadı!',
  forgotPasswordTitle: 'Şifrənizi bərpa edin',
  forgotPasswordAction: 'Şifrəniz yaddan çıxıb?',
  forgotPasswordInstructions:
    'Zəhmət olmazsa, e-poçt ünvanınızı daxil edin. Şifrənizi bərpa etmək üçün sizə bir e-poçt göndərəcəyik.',
  forgotPasswordSubmitLabel: 'E-poçt göndərmək',
  invalidErrorHint: 'Yanlış',
  lastLoginInstructions: 'Sonuncu dəfə bununla daxil olmusunuz',
  loginAtLabel: '%s -a daxil olun',
  loginLabel: 'Daxil olun',
  loginSubmitLabel: 'Daxil olun',
  loginWithLabel: '%s -la daxil olun',
  notYourAccountAction: 'Hesabınız deyilmi?',
  passwordInputPlaceholder: 'Şifrəniz',
  passwordStrength: {
    containsAtLeast: 'Aşağıdakı %d simvol növlərindən ən azı %d istifadə edin:',
    identicalChars: 'Bir sırada %d-dən çox eyni simvol olmaz (məsələn, "%s" icazə verilmir)',
    nonEmpty: 'Boş olmayan şifrə tələb olunur',
    numbers: 'Rəqəmlər (məsələn, 0-9)',
    lengthAtLeast: 'Ən azı %d simvolu olan uzunluqda',
    lowerCase: 'Kiçik hərflər (a-z)',
    shouldContain: 'İçində olmalıdır:',
    specialCharacters: 'Xüsusi simvollar (məsələn, !@#$%^&*)',
    upperCase: 'Böyük hərflər (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Əks halda, <br/>yə daxil olmaq və ya hesab yaratmaq üçün e-poçt ünvanınızı qeyd edin',
  passwordlessEmailCodeInstructions: 'Kod olan e-poçt %s -a göndərilib.',
  passwordlessEmailInstructions:
    '<br/>ya daxil olmaq üçün və ya hesab yaratmaq üçün e-poçt ünvanınızı qeyd edin',
  passwordlessSMSAlternativeInstructions:
    'Əks halda, <br/>ya daxil olmaq və ya hesab yaratmaq üçün telefon nömrənizi qeyd edin',
  passwordlessSMSCodeInstructions: 'Kod olan bir SMS <br/>%s -yə göndərildi.',
  passwordlessSMSInstructions:
    '<br/>ya daxil olmaq və ya hesab yaratmaq üçün telefon nömrənizi qeyd edin',
  phoneNumberInputPlaceholder: 'sizin telefon nömrəniz',
  resendCodeAction: 'Kod əldə olunmayıb?',
  resendLabel: 'Yenidən göndərmək',
  resendingLabel: 'Yenidən göndərməkdədir...',
  retryLabel: 'Yenidən cəhd et',
  sentLabel: 'Göndərildi!',
  showPassword: 'Şifrəni göstərmək',
  signUpTitle: 'Qeydiyyatdan keçmək',
  signUpLabel: 'Qeydiyyatdan keçmək',
  signUpSubmitLabel: 'Qeydiyyatdan keçmək',
  signUpTerms:
    'Qeydiyyatdan keçməklə, siz xidmət şərtləri və məxfilik siyasətimizlə razılığınızı bildirirsiniz.',
  signUpWithLabel: '%s ilə həsab yaradın',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Tək giriş aktivdir',
  submitLabel: 'Göndərmək',
  unrecoverableError:
    'Bir səhv baş verib. <br />Xahiş edirik, texniki dəstək xidməti ilə əlaqə saxlayın.',
  usernameFormatErrorHint:
    '%d-%d hərflər, rəqəmlər, və aşağıdakı simvollardan istifadə edin: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'sizin istifadəçi adınız',
  usernameOrEmailInputPlaceholder: 'istifadəçi adınız/e-poçt ünvanınız',
  title: 'Auth0',
  welcome: 'Xoş gəlmisiniz %s!',
  windowsAuthInstructions: 'Korporativ şəbəkənizdən qoşuldunuz&hellip;',
  windowsAuthLabel: 'Windows əsilliyinin yoxlanması',
  mfaInputPlaceholder: 'Kod',
  mfaLoginTitle: 'iki-mərhələli təsdiqləmə',
  mfaLoginInstructions: 'Zəhmət olmazsa, mobil proqramınızın yaratdığı yoxlama kodunu daxil edin.',
  mfaSubmitLabel: 'Daxil olun',
  mfaCodeErrorHint: '%d rəqəmlərdən istifadə edin'
};
