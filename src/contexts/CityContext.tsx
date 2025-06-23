
import React, { createContext, useContext, useState } from 'react';

interface CityData {
  state: string;
  city: string;
  analytics: {
    traffic: number;
    airQuality: number;
    energy: number;
    trend: string;
    population: string;
    smartIndex: number;
  };
  zones: Array<{
    name: string;
    traffic: number;
    air: number;
    energy: number;
    population: string;
  }>;
  kpis: {
    sensors: string;
    dataPoints: string;
    responseTime: string;
    reports: string;
    savings: string;
    co2Reduction: string;
    digitalInfra: string;
    govServices: string;
  };
  extraMetrics: {
    waterQuality: number;
    wasteManagement: number;
    publicTransport: number;
    digitalPayments: number;
    healthcare: number;
    education: number;
  };
}

interface CityContextType {
  selectedCity: CityData;
  setSelectedCity: (state: string, city: string) => void;
  availableStates: Record<string, string[]>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

// Expanded Indian city data with comprehensive statistics
const cityDatabase: Record<string, CityData> = {
  // Maharashtra
  'Maharashtra-Mumbai': {
    state: 'Maharashtra',
    city: 'Mumbai',
    analytics: { traffic: 82, airQuality: 76, energy: 195, trend: '+4%', population: '12.5M', smartIndex: 87 },
    zones: [
      { name: 'Bandra-Kurla Complex', traffic: 85, air: 72, energy: 89, population: '2.1M' },
      { name: 'South Mumbai', traffic: 78, air: 80, energy: 85, population: '1.8M' },
      { name: 'Andheri East', traffic: 88, air: 68, energy: 82, population: '3.2M' },
      { name: 'Powai', traffic: 65, air: 85, energy: 78, population: '1.4M' }
    ],
    kpis: { 
      sensors: '18,500', dataPoints: '4.2M', responseTime: '4.2 min', reports: '3,250', 
      savings: '₹45 Cr', co2Reduction: '19.8%', digitalInfra: '92%', govServices: '78%' 
    },
    extraMetrics: { waterQuality: 75, wasteManagement: 82, publicTransport: 88, digitalPayments: 94, healthcare: 79, education: 86 }
  },
  'Maharashtra-Pune': {
    state: 'Maharashtra',
    city: 'Pune',
    analytics: { traffic: 71, airQuality: 83, energy: 142, trend: '-1%', population: '3.1M', smartIndex: 79 },
    zones: [
      { name: 'Hinjewadi', traffic: 75, air: 85, energy: 80, population: '450K' },
      { name: 'Koregaon Park', traffic: 68, air: 88, energy: 75, population: '320K' },
      { name: 'Viman Nagar', traffic: 72, air: 82, energy: 78, population: '380K' },
      { name: 'Kothrud', traffic: 69, air: 86, energy: 74, population: '410K' }
    ],
    kpis: { 
      sensors: '12,800', dataPoints: '2.8M', responseTime: '3.8 min', reports: '2,150', 
      savings: '₹28 Cr', co2Reduction: '22.4%', digitalInfra: '87%', govServices: '74%' 
    },
    extraMetrics: { waterQuality: 81, wasteManagement: 78, publicTransport: 72, digitalPayments: 89, healthcare: 83, education: 92 }
  },
  'Maharashtra-Nagpur': {
    state: 'Maharashtra',
    city: 'Nagpur',
    analytics: { traffic: 65, airQuality: 78, energy: 125, trend: '+2%', population: '2.4M', smartIndex: 72 },
    zones: [
      { name: 'Civil Lines', traffic: 68, air: 82, energy: 76, population: '520K' },
      { name: 'Sitabuldi', traffic: 72, air: 78, energy: 79, population: '480K' },
      { name: 'Dharampeth', traffic: 62, air: 85, energy: 73, population: '410K' },
      { name: 'Manish Nagar', traffic: 66, air: 80, energy: 75, population: '390K' }
    ],
    kpis: { 
      sensors: '8,200', dataPoints: '1.9M', responseTime: '4.5 min', reports: '1,680', 
      savings: '₹18 Cr', co2Reduction: '16.2%', digitalInfra: '76%', govServices: '68%' 
    },
    extraMetrics: { waterQuality: 79, wasteManagement: 72, publicTransport: 64, digitalPayments: 78, healthcare: 76, education: 81 }
  },

  // Karnataka
  'Karnataka-Bangalore': {
    state: 'Karnataka',
    city: 'Bangalore',
    analytics: { traffic: 85, airQuality: 74, energy: 168, trend: '+2%', population: '8.4M', smartIndex: 91 },
    zones: [
      { name: 'Electronic City', traffic: 82, air: 76, energy: 88, population: '1.2M' },
      { name: 'Whitefield', traffic: 79, air: 78, energy: 85, population: '980K' },
      { name: 'Koramangala', traffic: 88, air: 71, energy: 82, population: '650K' },
      { name: 'Indiranagar', traffic: 91, air: 69, energy: 79, population: '720K' }
    ],
    kpis: { 
      sensors: '22,400', dataPoints: '5.1M', responseTime: '3.5 min', reports: '4,180', 
      savings: '₹62 Cr', co2Reduction: '17.2%', digitalInfra: '95%', govServices: '82%' 
    },
    extraMetrics: { waterQuality: 72, wasteManagement: 85, publicTransport: 76, digitalPayments: 96, healthcare: 88, education: 94 }
  },
  'Karnataka-Mysore': {
    state: 'Karnataka',
    city: 'Mysore',
    analytics: { traffic: 58, airQuality: 89, energy: 98, trend: '+1%', population: '920K', smartIndex: 78 },
    zones: [
      { name: 'Chamundi Hills', traffic: 45, air: 95, energy: 68, population: '180K' },
      { name: 'Devaraja Market', traffic: 68, air: 85, energy: 82, population: '240K' },
      { name: 'Vijayanagar', traffic: 62, air: 88, energy: 75, population: '220K' },
      { name: 'Kuvempunagar', traffic: 55, air: 92, energy: 71, population: '200K' }
    ],
    kpis: { 
      sensors: '4,800', dataPoints: '980K', responseTime: '3.2 min', reports: '890', 
      savings: '₹12 Cr', co2Reduction: '24.6%', digitalInfra: '82%', govServices: '79%' 
    },
    extraMetrics: { waterQuality: 86, wasteManagement: 88, publicTransport: 69, digitalPayments: 74, healthcare: 82, education: 89 }
  },

  // Delhi
  'Delhi-New Delhi': {
    state: 'Delhi',
    city: 'New Delhi',
    analytics: { traffic: 89, airQuality: 68, energy: 225, trend: '+5%', population: '16.8M', smartIndex: 85 },
    zones: [
      { name: 'Connaught Place', traffic: 95, air: 62, energy: 92, population: '2.8M' },
      { name: 'Gurgaon', traffic: 87, air: 71, energy: 89, population: '3.2M' },
      { name: 'Noida', traffic: 84, air: 73, energy: 86, population: '2.9M' },
      { name: 'Dwarka', traffic: 81, air: 75, energy: 83, population: '1.8M' }
    ],
    kpis: { 
      sensors: '28,600', dataPoints: '6.8M', responseTime: '4.8 min', reports: '5,420', 
      savings: '₹85 Cr', co2Reduction: '14.6%', digitalInfra: '89%', govServices: '85%' 
    },
    extraMetrics: { waterQuality: 68, wasteManagement: 76, publicTransport: 84, digitalPayments: 91, healthcare: 82, education: 87 }
  },

  // Tamil Nadu
  'Tamil Nadu-Chennai': {
    state: 'Tamil Nadu',
    city: 'Chennai',
    analytics: { traffic: 78, airQuality: 79, energy: 172, trend: '+1%', population: '4.9M', smartIndex: 82 },
    zones: [
      { name: 'OMR (IT Corridor)', traffic: 82, air: 81, energy: 87, population: '1.1M' },
      { name: 'T. Nagar', traffic: 85, air: 76, energy: 84, population: '920K' },
      { name: 'Anna Nagar', traffic: 72, air: 85, energy: 79, population: '780K' },
      { name: 'Velachery', traffic: 74, air: 82, energy: 81, population: '850K' }
    ],
    kpis: { 
      sensors: '15,200', dataPoints: '3.6M', responseTime: '4.1 min', reports: '2,980', 
      savings: '₹38 Cr', co2Reduction: '20.8%', digitalInfra: '84%', govServices: '76%' 
    },
    extraMetrics: { waterQuality: 78, wasteManagement: 81, publicTransport: 79, digitalPayments: 87, healthcare: 84, education: 89 }
  },
  'Tamil Nadu-Coimbatore': {
    state: 'Tamil Nadu',
    city: 'Coimbatore',
    analytics: { traffic: 64, airQuality: 82, energy: 118, trend: '+0.5%', population: '1.6M', smartIndex: 75 },
    zones: [
      { name: 'RS Puram', traffic: 68, air: 85, energy: 76, population: '320K' },
      { name: 'Peelamedu', traffic: 72, air: 80, energy: 82, population: '380K' },
      { name: 'Gandhipuram', traffic: 78, air: 78, energy: 85, population: '410K' },
      { name: 'Saravanampatti', traffic: 58, air: 88, energy: 73, population: '290K' }
    ],
    kpis: { 
      sensors: '6,400', dataPoints: '1.4M', responseTime: '3.8 min', reports: '1,240', 
      savings: '₹16 Cr', co2Reduction: '21.2%', digitalInfra: '78%', govServices: '72%' 
    },
    extraMetrics: { waterQuality: 84, wasteManagement: 79, publicTransport: 65, digitalPayments: 81, healthcare: 85, education: 87 }
  },

  // West Bengal
  'West Bengal-Kolkata': {
    state: 'West Bengal',
    city: 'Kolkata',
    analytics: { traffic: 74, airQuality: 72, energy: 156, trend: '-2%', population: '4.5M', smartIndex: 76 },
    zones: [
      { name: 'Salt Lake City', traffic: 68, air: 78, energy: 82, population: '850K' },
      { name: 'Park Street', traffic: 82, air: 69, energy: 86, population: '620K' },
      { name: 'Rajarhat', traffic: 71, air: 76, energy: 79, population: '720K' },
      { name: 'Howrah', traffic: 79, air: 71, energy: 83, population: '980K' }
    ],
    kpis: { 
      sensors: '11,800', dataPoints: '2.9M', responseTime: '4.6 min', reports: '2,340', 
      savings: '₹31 Cr', co2Reduction: '18.4%', digitalInfra: '79%', govServices: '71%' 
    },
    extraMetrics: { waterQuality: 74, wasteManagement: 73, publicTransport: 81, digitalPayments: 82, healthcare: 78, education: 85 }
  },

  // Gujarat
  'Gujarat-Ahmedabad': {
    state: 'Gujarat',
    city: 'Ahmedabad',
    analytics: { traffic: 69, airQuality: 74, energy: 148, trend: '+3%', population: '5.6M', smartIndex: 83 },
    zones: [
      { name: 'SG Highway', traffic: 75, air: 76, energy: 85, population: '1.2M' },
      { name: 'Old City', traffic: 82, air: 68, energy: 89, population: '1.8M' },
      { name: 'Satellite', traffic: 65, air: 82, energy: 78, population: '950K' },
      { name: 'Vastrapur', traffic: 68, air: 79, energy: 81, population: '780K' }
    ],
    kpis: { 
      sensors: '14,200', dataPoints: '3.2M', responseTime: '3.9 min', reports: '2,680', 
      savings: '₹35 Cr', co2Reduction: '19.6%', digitalInfra: '88%', govServices: '81%' 
    },
    extraMetrics: { waterQuality: 76, wasteManagement: 84, publicTransport: 73, digitalPayments: 86, healthcare: 80, education: 83 }
  },
  'Gujarat-Surat': {
    state: 'Gujarat',
    city: 'Surat',
    analytics: { traffic: 73, airQuality: 71, energy: 135, trend: '+4%', population: '4.5M', smartIndex: 77 },
    zones: [
      { name: 'Adajan', traffic: 76, air: 74, energy: 82, population: '980K' },
      { name: 'Vesu', traffic: 68, air: 78, energy: 79, population: '820K' },
      { name: 'City Light', traffic: 79, air: 69, energy: 86, population: '1.1M' },
      { name: 'Katargam', traffic: 75, air: 73, energy: 83, population: '890K' }
    ],
    kpis: { 
      sensors: '10,800', dataPoints: '2.6M', responseTime: '4.2 min', reports: '2,150', 
      savings: '₹26 Cr', co2Reduction: '17.8%', digitalInfra: '81%', govServices: '74%' 
    },
    extraMetrics: { waterQuality: 73, wasteManagement: 86, publicTransport: 68, digitalPayments: 84, healthcare: 77, education: 79 }
  },

  // Rajasthan
  'Rajasthan-Jaipur': {
    state: 'Rajasthan',
    city: 'Jaipur',
    analytics: { traffic: 76, airQuality: 75, energy: 142, trend: '+2%', population: '3.1M', smartIndex: 74 },
    zones: [
      { name: 'Pink City', traffic: 85, air: 72, energy: 88, population: '1.2M' },
      { name: 'Malviya Nagar', traffic: 72, air: 79, energy: 82, population: '680K' },
      { name: 'Vaishali Nagar', traffic: 69, air: 81, energy: 78, population: '590K' },
      { name: 'Mansarovar', traffic: 78, air: 76, energy: 85, population: '720K' }
    ],
    kpis: { 
      sensors: '9,600', dataPoints: '2.1M', responseTime: '4.4 min', reports: '1,890', 
      savings: '₹22 Cr', co2Reduction: '18.9%', digitalInfra: '75%', govServices: '69%' 
    },
    extraMetrics: { waterQuality: 71, wasteManagement: 75, publicTransport: 62, digitalPayments: 79, healthcare: 74, education: 82 }
  },

  // Telangana
  'Telangana-Hyderabad': {
    state: 'Telangana',
    city: 'Hyderabad',
    analytics: { traffic: 81, airQuality: 77, energy: 165, trend: '+3%', population: '6.9M', smartIndex: 86 },
    zones: [
      { name: 'HITEC City', traffic: 84, air: 79, energy: 89, population: '1.5M' },
      { name: 'Banjara Hills', traffic: 78, air: 82, energy: 85, population: '890K' },
      { name: 'Gachibowli', traffic: 82, air: 76, energy: 87, population: '1.2M' },
      { name: 'Begumpet', traffic: 85, air: 74, energy: 91, population: '980K' }
    ],
    kpis: { 
      sensors: '17,200', dataPoints: '4.1M', responseTime: '3.7 min', reports: '3,450', 
      savings: '₹48 Cr', co2Reduction: '20.4%', digitalInfra: '93%', govServices: '83%' 
    },
    extraMetrics: { waterQuality: 78, wasteManagement: 83, publicTransport: 77, digitalPayments: 92, healthcare: 86, education: 91 }
  },

  // Uttar Pradesh
  'Uttar Pradesh-Lucknow': {
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    analytics: { traffic: 72, airQuality: 69, energy: 139, trend: '+1%', population: '2.8M', smartIndex: 71 },
    zones: [
      { name: 'Hazratganj', traffic: 79, air: 68, energy: 84, population: '620K' },
      { name: 'Gomti Nagar', traffic: 68, air: 75, energy: 79, population: '780K' },
      { name: 'Indira Nagar', traffic: 75, air: 71, energy: 82, population: '590K' },
      { name: 'Aliganj', traffic: 71, air: 73, energy: 80, population: '530K' }
    ],
    kpis: { 
      sensors: '8,900', dataPoints: '2.0M', responseTime: '4.7 min', reports: '1,750', 
      savings: '₹19 Cr', co2Reduction: '16.8%', digitalInfra: '72%', govServices: '67%' 
    },
    extraMetrics: { waterQuality: 69, wasteManagement: 71, publicTransport: 58, digitalPayments: 76, healthcare: 73, education: 78 }
  },

  // Kerala
  'Kerala-Kochi': {
    state: 'Kerala',
    city: 'Kochi',
    analytics: { traffic: 67, airQuality: 86, energy: 115, trend: '+1%', population: '2.1M', smartIndex: 80 },
    zones: [
      { name: 'Marine Drive', traffic: 72, air: 89, energy: 78, population: '420K' },
      { name: 'Kakkanad', traffic: 65, air: 88, energy: 82, population: '580K' },
      { name: 'Edapally', traffic: 69, air: 85, energy: 79, population: '490K' },
      { name: 'Fort Kochi', traffic: 62, air: 92, energy: 75, population: '380K' }
    ],
    kpis: { 
      sensors: '6,800', dataPoints: '1.6M', responseTime: '3.6 min', reports: '1,320', 
      savings: '₹15 Cr', co2Reduction: '23.2%', digitalInfra: '84%', govServices: '78%' 
    },
    extraMetrics: { waterQuality: 88, wasteManagement: 89, publicTransport: 71, digitalPayments: 83, healthcare: 91, education: 94 }
  }
};

const availableStates = {
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
  'Karnataka': ['Bangalore', 'Mysore'],
  'Delhi': ['New Delhi'],
  'Tamil Nadu': ['Chennai', 'Coimbatore'],
  'West Bengal': ['Kolkata'],
  'Gujarat': ['Ahmedabad', 'Surat'],
  'Rajasthan': ['Jaipur'],
  'Telangana': ['Hyderabad'],
  'Uttar Pradesh': ['Lucknow'],
  'Kerala': ['Kochi']
};

export const CityProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCity, setSelectedCityData] = useState<CityData>(cityDatabase['Maharashtra-Mumbai']);

  const setSelectedCity = (state: string, city: string) => {
    const key = `${state}-${city}`;
    if (cityDatabase[key]) {
      setSelectedCityData(cityDatabase[key]);
    }
  };

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity, availableStates }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
