export interface FeesData {
  tuition: {
    term1: string;
    term2: string;
    term3: string;
    term4: string;
    annual: string;
  };
  boarding: {
    term1: string;
    term2: string;
    term3: string;
    term4: string;
    annual: string;
  };
  total: {
    term1: string;
    term2: string;
    term3: string;
    term4: string;
    annual: string;
  };
}

export const feesData: FeesData = {
  tuition: {
    term1: 'R 0',
    term2: 'R 0',
    term3: 'R 0',
    term4: 'R 0',
    annual: 'R 0'
  },
  boarding: {
    term1: 'R 1,750',
    term2: 'R 1,750',
    term3: 'R 1,750',
    term4: 'R 1,750',
    annual: 'R 7,000'
  },
  total: {
    term1: 'R 1,750',
    term2: 'R 1,750',
    term3: 'R 1,750',
    term4: 'R 1,750',
    annual: 'R 7,000'
  }
};