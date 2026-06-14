const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    return Math.min(strength, 4);
  };

  const getStrengthText = (strength) => {
    switch(strength) {
      case 0: return 'Very Weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const getStrengthColor = (strength) => {
    switch(strength) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  const strength = calculateStrength(password);
  const strengthText = getStrengthText(strength);
  const strengthColor = getStrengthColor(strength);

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 h-1">
        {[0, 1, 2, 3].map((level) => (
          <div
            key={level}
            className={`flex-1 rounded-full transition-all duration-300 ${
              level < strength ? strengthColor : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className={`text-xs mt-1 ${strength >= 3 ? 'text-green-600' : 'text-gray-500'}`}>
        Password strength: <span className="font-medium">{strengthText}</span>
      </p>
      
      {strength < 3 && (
        <ul className="text-xs text-gray-500 mt-2 space-y-1">
          <li className={password.length >= 8 ? 'text-green-600 line-through' : ''}>
            • At least 8 characters
          </li>
          <li className={/[a-z]/.test(password) && /[A-Z]/.test(password) ? 'text-green-600 line-through' : ''}>
            • Uppercase and lowercase letters
          </li>
          <li className={/\d/.test(password) ? 'text-green-600 line-through' : ''}>
            • At least one number
          </li>
        </ul>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;