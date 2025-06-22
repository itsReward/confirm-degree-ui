import React from 'react';
import { CreditCard, Banknote, Coins } from 'lucide-react';
import { PAYMENT_METHODS } from '../../utils/constants';

const PaymentSelector = ({ selectedMethod, onMethodChange, amount = 10.00 }) => {
  const paymentOptions = [
    {
      id: PAYMENT_METHODS.CREDIT_CARD,
      name: 'Credit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCard,
      fee: 0,
    },
    {
      id: PAYMENT_METHODS.BANK_TRANSFER,
      name: 'Bank Transfer',
      description: 'Direct bank transfer (ACH)',
      icon: Banknote,
      fee: 0,
    },
    {
      id: PAYMENT_METHODS.CRYPTO,
      name: 'Cryptocurrency',
      description: 'Bitcoin, Ethereum',
      icon: Coins,
      fee: 0,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>

      <div className="grid grid-cols-1 gap-3">
        {paymentOptions.map((option) => {
          const Icon = option.icon;
          const totalAmount = amount + option.fee;

          return (
            <label
              key={option.id}
              className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                selectedMethod === option.id
                  ? 'border-green-500 bg-green-50 ring-2 ring-green-500'
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="payment-method"
                value={option.id}
                checked={selectedMethod === option.id}
                onChange={(e) => onMethodChange(e.target.value)}
                className="sr-only"
              />

              <div className="flex items-center">
                <Icon className={`w-6 h-6 mr-3 ${
                  selectedMethod === option.id ? 'text-green-600' : 'text-gray-400'
                }`} />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${
                      selectedMethod === option.id ? 'text-green-900' : 'text-gray-900'
                    }`}>
                      {option.name}
                    </span>
                    <span className={`text-sm font-medium ${
                      selectedMethod === option.id ? 'text-green-900' : 'text-gray-900'
                    }`}>
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <span className={`text-sm ${
                    selectedMethod === option.id ? 'text-green-700' : 'text-gray-500'
                  }`}>
                    {option.description}
                  </span>
                  {option.fee > 0 && (
                    <span className="text-xs text-gray-500">
                      (includes ${option.fee.toFixed(2)} processing fee)
                    </span>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentSelector;
