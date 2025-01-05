export const logoMap: { [key: string]: string } = {
    'British Airways': 'britishAirways',
    'CheapFligths': 'cheapFligths',
    'Kiwi.com': 'kiwicom',
    'Lufthansa': 'lufthansa',
    'Trip.com': 'tripcom',
    'Wizzair.com': 'wizzaircom'
};

export const getAgencyLogoPath = (agentName: string): string => {
  if (!agentName) {
    return '/agencies/default.svg';
  }

  const logoName = logoMap[agentName];
  if (!logoName) {
    console.warn(`No logo mapping found for agent: ${agentName}`);
    return '/agencies/default.svg';
  }

  return `/agencies/${logoName}.svg`;
}; 