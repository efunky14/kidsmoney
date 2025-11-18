const { useState, useEffect, useCallback } = React;

// Simple SVG icon wrapper
const Icon = ({ d, ...props }) => React.createElement('svg', {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
}, React.createElement('path', { d }));

// Icon components with SVG paths
const Wallet = (props) => Icon({ d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", ...props });
const Plus = (props) => Icon({ d: "M5 12h14M12 5v14", ...props });
const Minus = (props) => Icon({ d: "M5 12h14", ...props });
const ArrowLeftRight = (props) => Icon({ d: "m6 8-4 4 4 4M18 8l4 4-4 4M2 12h20", ...props });
const TrendingUp = (props) => Icon({ d: "m22 7-8.5 8.5-5-5L2 17M16 7h6v6", ...props });
const Settings = (props) => Icon({ d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", ...props });
const Moon = (props) => Icon({ d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", ...props });
const Sun = (props) => Icon({ d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", ...props });
const Lock = (props) => Icon({ d: "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4", ...props });
const Unlock = (props) => Icon({ d: "M7 11V7a5 5 0 0 1 9.9-1M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z", ...props });
const Download = (props) => Icon({ d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3", ...props });
const Upload = (props) => Icon({ d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12", ...props });
const X = (props) => Icon({ d: "M18 6 6 18M6 6l12 12", ...props });
const Edit2 = (props) => Icon({ d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5ZM15 5l4 4", ...props });
const Trash2 = (props) => Icon({ d: "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6", ...props });
const Camera = (props) => Icon({ d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", ...props });
const Check = (props) => Icon({ d: "M20 6 9 17l-5-5", ...props });
const Eye = (props) => Icon({ d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", ...props });
const EyeOff = (props) => Icon({ d: "M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20", ...props });
const DollarSign = (props) => Icon({ d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", ...props });
const PiggyBank = (props) => Icon({ d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5zM2 9v1c0 1.1.9 2 2 2h1M16 11h0", ...props });
const Calendar = (props) => Icon({ d: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", ...props });
const Percent = (props) => Icon({ d: "M19 5 5 19M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", ...props });
const Home = (props) => Icon({ d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10", ...props });
const Receipt = (props) => Icon({ d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1zM16 8h-6M16 12h-6M16 16h-6", ...props });
const BarChart3 = (props) => Icon({ d: "M3 3v18h18M18 17V9M13 17V5M8 17v-3", ...props });
const HelpCircle = (props) => Icon({ d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01", ...props });
const ArrowLeft = (props) => Icon({ d: "m12 19-7-7 7-7M19 12H5", ...props });

// Note: Charts functionality temporarily disabled for browser compatibility
// const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ReferenceLine } = Recharts;

// Storage Adapter - Future-proof for Supabase migration
const StorageAdapter = {
  save: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },
  load: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Load error:', e);
      return null;
    }
  },
  delete: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Delete error:', e);
      return false;
    }
  }
};

// Utility Functions
const generateId = () => crypto.randomUUID();

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace(/\u00A0/g, '');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = days[date.getDay()];
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = String(date.getFullYear()).slice(-2);
  return `${dayOfWeek} • ${month}/${day}/${year}`;
};

// Format date-only strings (YYYY-MM-DD) without timezone conversion
const formatDateOnly = (dateString) => {
  if (!dateString) return 'N/A';
  const [year, month, day] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = days[date.getDay()];
  const yearShort = year.slice(-2);
  return `${dayOfWeek} • ${month}/${day}/${yearShort}`;
};

// Format frequency with proper capitalization
const formatFrequency = (frequency) => {
  if (frequency === 'weekly') return 'Weekly';
  if (frequency === 'biweekly') return 'Bi-weekly';
  if (frequency === 'monthly') return 'Monthly';
  if (frequency === 'yearly') return 'Yearly';
  return frequency;
};

const hashPIN = async (pin) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result.toISOString().split('T')[0];
};

const avatarColors = {
  purple: { from: 'from-purple-400', to: 'to-purple-600' },
  blue: { from: 'from-blue-400', to: 'to-blue-600' },
  teal: { from: 'from-teal-400', to: 'to-teal-600' },
  green: { from: 'from-green-400', to: 'to-green-600' },
  yellow: { from: 'from-yellow-400', to: 'to-yellow-600' },
  orange: { from: 'from-orange-400', to: 'to-orange-600' },
  red: { from: 'from-red-400', to: 'to-red-600' },
  pink: { from: 'from-pink-400', to: 'to-pink-600' }
};

const getAvatarGradient = (color) => {
  const gradient = avatarColors[color] || avatarColors.blue;
  return `bg-gradient-to-br ${gradient.from} ${gradient.to}`;
};

// Image cropping utility
const cropImageToSquare = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height);
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        
        const sourceX = (img.width - size) / 2;
        const sourceY = (img.height - size) / 2;
        
        ctx.drawImage(img, sourceX, sourceY, size, size, 0, 0, 200, 200);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

// Main App Component
function FamilyMoneyManager() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pendingAction, setPendingAction] = useState(null); // Store action to execute after PIN verification
  const [settings, setSettings] = useState({
    currency: 'USD',
    pinEnabled: false,
    pinHash: null,
    quickDescriptions: {
      deposit: ['Gift', 'Birthday', 'Holiday', 'Good Grades', 'Chores', 'Tooth Fairy'],
      withdrawal: ['Toys', 'Games', 'Candy', 'Books', 'Movies', 'Apps']
    }
  });
  const [children, setChildren] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [balanceType, setBalanceType] = useState('total');
  const [transactionKidFilter, setTransactionKidFilter] = useState(null); // null = All
  const [transactionTypeFilter, setTransactionTypeFilter] = useState(null); // null = All, 'addition', 'spending', 'transfer'
  const [currentView, setCurrentView] = useState('home'); // 'home', 'transactions', 'charts'
  const [showModal, setShowModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [modalData, setModalData] = useState({});
  const [showInterestHelp, setShowInterestHelp] = useState(false);
  const [showAllowanceHelp, setShowAllowanceHelp] = useState(false);

  // Load data on mount
  useEffect(() => {
    const savedSettings = StorageAdapter.load('fmm_settings');
    const savedChildren = StorageAdapter.load('fmm_children');
    const savedTransactions = StorageAdapter.load('fmm_transactions');
    
    if (savedSettings) {
      setSettings({
        ...savedSettings,
        quickDescriptions: savedSettings.quickDescriptions || {
          deposit: ['Gift', 'Birthday', 'Holiday', 'Good Grades', 'Chores', 'Tooth Fairy'],
          withdrawal: ['Toys', 'Games', 'Candy', 'Books', 'Movies', 'Apps']
        }
      });
      setDarkMode(savedSettings.darkMode || false);
      // Don't lock on app start
    }
    if (savedChildren) setChildren(savedChildren);
    if (savedTransactions) setTransactions(savedTransactions);
  }, []);

  // Save data
  const saveData = useCallback(() => {
    StorageAdapter.save('fmm_settings', settings);
    StorageAdapter.save('fmm_children', children);
    StorageAdapter.save('fmm_transactions', transactions);
  }, [settings, children, transactions]);

  useEffect(() => {
    saveData();
  }, [settings, children, transactions, saveData]);

  // Check for due allowances and interest
  useEffect(() => {
    const checkAutomations = () => {
      const now = new Date();
      let updated = false;

      children.forEach(child => {
        // Check if skipped allowance date has passed - auto-unskip
        if (child.allowance?.skipped && child.allowance.originalNextPaymentDate) {
          const originalDate = new Date(child.allowance.originalNextPaymentDate);
          if (now >= originalDate) {
            updateChild(child.id, {
              allowance: { 
                ...child.allowance, 
                skipped: false,
                originalNextPaymentDate: null
              }
            });
            updated = true;
          }
        }

        // Check allowance
        if (child.allowance?.enabled && child.allowance.nextPaymentDate) {
          const nextDate = new Date(child.allowance.nextPaymentDate);
          if (now >= nextDate) {
            addTransaction({
              childId: child.id,
              type: 'allowance',
              amount: child.allowance.amount,
              accountType: 'spending',
              description: `Allowance payment`
            });
            
            // Update next payment date
            const frequency = child.allowance.frequency;
            const newNextDate = frequency === 'weekly' ? addDays(nextDate, 7)
              : frequency === 'biweekly' ? addDays(nextDate, 14)
              : addMonths(nextDate, 1);
            
            updateChild(child.id, {
              allowance: { ...child.allowance, nextPaymentDate: newNextDate }
            });
            updated = true;
          }
        }

        // Check interest
        if (child.interest?.enabled && child.interest.nextPaymentDate && child.savingBalance > 0) {
          const nextDate = new Date(child.interest.nextPaymentDate);
          if (now >= nextDate) {
            const rate = child.interest.rate / 100;
            const frequency = child.interest.frequency;
            const ratePerPeriod = frequency === 'monthly' ? rate / 12 : rate;
            const interestAmount = Math.round(child.savingBalance * ratePerPeriod * 100) / 100;
            
            if (interestAmount > 0) {
              addTransaction({
                childId: child.id,
                type: 'interest',
                amount: interestAmount,
                accountType: 'saving',
                description: `Interest payment`
              });
              
              // Update next payment date
              const newNextDate = frequency === 'monthly' 
                ? addMonths(nextDate, 1) 
                : addMonths(nextDate, 12);
              
              updateChild(child.id, {
                interest: { ...child.interest, nextPaymentDate: newNextDate }
              });
              updated = true;
            }
          }
        }
      });

      if (updated) {
        showToast('Automatic payments processed!', 'success');
      }
    };

    const interval = setInterval(checkAutomations, 86400000); // Check every 24 hours
    checkAutomations(); // Check immediately
    return () => clearInterval(interval);
  }, [children]);

  // Toast notification
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Child management
  const addChild = (childData) => {
    const now = new Date().toISOString();
    const newChild = {
      id: generateId(),
      name: childData.name,
      avatar: childData.avatar || null,
      avatarColor: childData.avatarColor || 'blue',
      createdAt: now,
      spendingBalance: childData.spendingBalance || 0,
      savingBalance: childData.savingBalance || 0,
      allowance: childData.allowance || {
        enabled: false,
        amount: 0,
        frequency: 'biweekly',
        nextPaymentDate: null
      },
      interest: childData.interest || {
        enabled: false,
        rate: 5.0,
        frequency: 'monthly',
        nextPaymentDate: null
      }
    };
    
    // Set initial payment dates if enabled
    if (newChild.allowance.enabled && !newChild.allowance.nextPaymentDate) {
      newChild.allowance.nextPaymentDate = addDays(now, 
        newChild.allowance.frequency === 'weekly' ? 7 
        : newChild.allowance.frequency === 'biweekly' ? 14 
        : 30
      );
    }
    
    if (newChild.interest.enabled && !newChild.interest.nextPaymentDate) {
      newChild.interest.nextPaymentDate = newChild.interest.frequency === 'monthly'
        ? addMonths(now, 1)
        : addMonths(now, 12);
    }
    
    setChildren([...children, newChild]);
    showToast(`${childData.name} added successfully!`, 'success');
  };

  const updateChild = (childId, updates) => {
    setChildren(prevChildren => prevChildren.map(child => 
      child.id === childId ? { ...child, ...updates } : child
    ));
  };

  const toggleAllowanceSkip = (childId) => {
    setChildren(prevChildren => prevChildren.map(child => {
      if (child.id !== childId) return child;
      
      const isCurrentlySkipped = child.allowance?.skipped;
      
      if (isCurrentlySkipped) {
        // Unskip - restore original date
        return {
          ...child,
          allowance: {
            ...child.allowance,
            skipped: false,
            nextPaymentDate: child.allowance.originalNextPaymentDate || child.allowance.nextPaymentDate
          }
        };
      } else {
        // Skip - save original and move to next interval
        const currentDate = child.allowance.nextPaymentDate;
        const daysMap = { weekly: 7, biweekly: 14, monthly: 30 };
        const days = daysMap[child.allowance.frequency] || 14;
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + days);
        const newDateString = nextDate.toISOString().split('T')[0];
        
        return {
          ...child,
          allowance: {
            ...child.allowance,
            skipped: true,
            originalNextPaymentDate: currentDate,
            nextPaymentDate: newDateString
          }
        };
      }
    }));
  };

  const toggleAllowancePause = (childId) => {
    setChildren(prevChildren => prevChildren.map(child => {
      if (child.id !== childId) return child;
      
      return {
        ...child,
        allowance: {
          ...child.allowance,
          paused: !child.allowance?.paused
        }
      };
    }));
  };

  const toggleInterestPause = (childId) => {
    setChildren(prevChildren => prevChildren.map(child => {
      if (child.id !== childId) return child;
      
      return {
        ...child,
        interest: {
          ...child.interest,
          paused: !child.interest?.paused
        }
      };
    }));
  };

  const deleteChild = (childId) => {
    setChildren(children.filter(c => c.id !== childId));
    setTransactions(transactions.filter(t => t.childId !== childId));
    setSelectedChild(null);
  };

  // Transaction management
  const addTransaction = (txData) => {
    
    // Get the latest child state using a temporary variable
    let childToUpdate = null;
    let newSpending = 0;
    let newSaving = 0;
    let shouldReturn = false;
    
    setChildren(prevChildren => {
      const child = prevChildren.find(c => c.id === txData.childId);
      if (!child) {
        shouldReturn = true;
        return prevChildren;
      }

      childToUpdate = child;

      newSpending = child.spendingBalance;
      newSaving = child.savingBalance;

      // Handle 50/50 split
      if (txData.accountType === 'split') {
        const halfAmount = Math.round(txData.amount / 2);
        if (txData.type === 'deposit') {
          newSpending += halfAmount;
          newSaving += (txData.amount - halfAmount);
        } else if (txData.type === 'withdrawal') {
          newSpending -= halfAmount;
          newSaving -= (txData.amount - halfAmount);
          // Check if going into debt
          if (newSpending < 0 || newSaving < 0) {
            showToast(`${txData.childName} has gone into debt 😟`, 'error');
          }
        }
      } else if (txData.type === 'transfer') {
        if (txData.metadata.fromAccount === 'spending') {
          if (child.spendingBalance < txData.amount) {
            showToast('Insufficient funds in Spending account', 'error');
            shouldReturn = true;
            return prevChildren;
          }
          newSpending -= txData.amount;
          newSaving += txData.amount;
        } else {
          if (child.savingBalance < txData.amount) {
            showToast('Insufficient funds in Savings account', 'error');
            shouldReturn = true;
            return prevChildren;
          }
          newSaving -= txData.amount;
          newSpending += txData.amount;
        }
      } else if (txData.type === 'withdrawal') {
        if (txData.accountType === 'spending') {
          newSpending -= txData.amount;
          // Check if going into debt
          if (newSpending < 0) {
            showToast(`${txData.childName} has gone into debt 😟`, 'error');
          }
        } else {
          newSaving -= txData.amount;
          // Check if going into debt
          if (newSaving < 0) {
            showToast(`${txData.childName} has gone into debt 😟`, 'error');
          }
        }
      } else {
        // deposit, allowance, interest
        if (txData.accountType === 'spending') {
          newSpending += txData.amount;
        } else {
          newSaving += txData.amount;
        }
      }

      // Round the balances
      newSpending = Math.round(newSpending * 100) / 100;
      newSaving = Math.round(newSaving * 100) / 100;

      // Update this child in the array
      return prevChildren.map(c => 
        c.id === txData.childId 
          ? { ...c, spendingBalance: newSpending, savingBalance: newSaving }
          : c
      );
    });

    if (shouldReturn) return;

    const transaction = {
      id: generateId(),
      childId: txData.childId,
      type: txData.type,
      amount: txData.amount,
      accountType: txData.accountType,
      description: txData.description,
      timestamp: new Date().toISOString(),
      balanceAfter: {
        spending: newSpending,
        saving: newSaving
      },
      metadata: txData.metadata || {}
    };

    setTransactions(prevTransactions => [transaction, ...prevTransactions]);
    
    // Update selectedChild immediately if viewing that child
    if (selectedChild && selectedChild.id === txData.childId) {
      setSelectedChild(prev => ({ 
        ...prev, 
        spendingBalance: newSpending, 
        savingBalance: newSaving 
      }));
    }

    // Only show toast and close modal for the last transaction in a batch
    if (!txData.skipModalClose) {
      const actionText = txData.type === 'deposit' ? 'Added to' : 'Spent by';
      const toastType = txData.type === 'deposit' ? 'success' : 'error';
      showToast(`${formatCurrency(txData.amount)} ${actionText} ${txData.childName || 'Unknown'}`, toastType);
      setShowModal(null);
      setModalData({});
    } else {
    }
  };

  const deleteTransaction = (txId) => {
    const tx = transactions.find(t => t.id === txId);
    if (!tx) return;

    const child = children.find(c => c.id === tx.childId);
    if (!child) return;

    const remainingTxs = transactions.filter(t => t.id !== txId);
    const childTxs = remainingTxs
      .filter(t => t.childId === child.id)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    let spending = 0;
    let saving = 0;
    
    childTxs.forEach(t => {
      if (t.accountType === 'split') {
        const halfAmount = Math.round(t.amount / 2);
        if (t.type === 'deposit' || t.type === 'allowance' || t.type === 'interest') {
          spending += halfAmount;
          saving += (t.amount - halfAmount);
        } else {
          spending -= halfAmount;
          saving -= (t.amount - halfAmount);
        }
      } else if (t.type === 'transfer') {
        if (t.metadata.fromAccount === 'spending') {
          spending -= t.amount;
          saving += t.amount;
        } else {
          saving -= t.amount;
          spending += t.amount;
        }
      } else if (t.type === 'withdrawal') {
        if (t.accountType === 'spending') {
          spending -= t.amount;
        } else {
          saving -= t.amount;
        }
      } else {
        if (t.accountType === 'spending') {
          spending += t.amount;
        } else {
          saving += t.amount;
        }
      }
    });
    
    const updatedChild = {
      spendingBalance: Math.max(0, Math.round(spending * 100) / 100),
      savingBalance: Math.max(0, Math.round(saving * 100) / 100)
    };
    
    setTransactions(remainingTxs);
    updateChild(child.id, updatedChild);
    
    if (selectedChild && selectedChild.id === child.id) {
      setSelectedChild({ ...selectedChild, ...updatedChild });
    }
    
    showToast('Transaction deleted', 'info');
    setShowModal(null);
    setModalData({});
  };

  const editTransaction = (txId, updates) => {
    setTransactions(prevTxs => {
      const txIndex = prevTxs.findIndex(t => t.id === txId);
      if (txIndex === -1) return prevTxs;
      
      const updatedTxs = [...prevTxs];
      updatedTxs[txIndex] = {
        ...updatedTxs[txIndex],
        amount: updates.amount || updatedTxs[txIndex].amount,
        description: updates.description || updatedTxs[txIndex].description
      };
      
      // Recalculate balances for this child
      const tx = updatedTxs[txIndex];
      const child = children.find(c => c.id === tx.childId);
      if (!child) return updatedTxs;
      
      const childTxs = updatedTxs
        .filter(t => t.childId === child.id)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      
      let spending = 0;
      let saving = 0;
      
      childTxs.forEach(t => {
        if (t.accountType === 'split') {
          const halfAmount = Math.round(t.amount / 2);
          if (t.type === 'deposit' || t.type === 'allowance' || t.type === 'interest') {
            spending += halfAmount;
            saving += (t.amount - halfAmount);
          } else {
            spending -= halfAmount;
            saving -= (t.amount - halfAmount);
          }
        } else if (t.type === 'transfer') {
          if (t.metadata.fromAccount === 'spending') {
            spending -= t.amount;
            saving += t.amount;
          } else {
            saving -= t.amount;
            spending += t.amount;
          }
        } else if (t.type === 'withdrawal') {
          if (t.accountType === 'spending') {
            spending -= t.amount;
          } else {
            saving -= t.amount;
          }
        } else {
          if (t.accountType === 'spending') {
            spending += t.amount;
          } else {
            saving += t.amount;
          }
        }
        
        // Update balanceAfter for each transaction
        t.balanceAfter = {
          spending: Math.round(spending * 100) / 100,
          saving: Math.round(saving * 100) / 100
        };
      });
      
      const updatedChild = {
        spendingBalance: Math.max(0, Math.round(spending * 100) / 100),
        savingBalance: Math.max(0, Math.round(saving * 100) / 100)
      };
      
      updateChild(child.id, updatedChild);
      
      if (selectedChild && selectedChild.id === child.id) {
        setSelectedChild({ ...selectedChild, ...updatedChild });
      }
      
      return updatedTxs;
    });
    
    showToast('Transaction updated', 'success');
  };

  // PIN verification
  const verifyPIN = async () => {
    const hash = await hashPIN(pinInput);
    if (hash === settings.pinHash) {
      setIsLocked(false);
      setPinInput('');
      showToast('Unlocked!', 'success');
      
      // Execute pending action if exists
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
    } else {
      showToast('Incorrect PIN', 'error');
      setPinInput('');
    }
  };

  // Request PIN verification before sensitive actions
  const requirePIN = (action) => {
    if (settings.pinEnabled) {
      setPendingAction(() => action);
      setIsLocked(true);
    } else {
      action();
    }
  };

  // Export/Import
  const exportData = () => {
    const data = {
      version: '1.0.0',
      exportDate: new Date().toISOString(),
      settings,
      children,
      transactions
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `family-money-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('Data exported successfully!', 'success');
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.children) setChildren(data.children);
        if (data.transactions) setTransactions(data.transactions);
        if (data.settings) setSettings(data.settings);
        showToast('Data imported successfully!', 'success');
      } catch (error) {
        showToast('Error importing data', 'error');
      }
    };
    reader.readAsText(file);
  };

  // Chart data generation
  const generateChartData = (childId, range) => {
    if (childId === 'all') {
      // Combine all kids' transactions
      const allTransactions = transactions
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      const now = new Date();
      const startDate = new Date();
      
      switch(range) {
        case '3M': startDate.setMonth(now.getMonth() - 3); break;
        case '6M': startDate.setMonth(now.getMonth() - 6); break;
        case '1Y': startDate.setFullYear(now.getFullYear() - 1); break;
        case '3Y': startDate.setFullYear(now.getFullYear() - 3); break;
        case '5Y': startDate.setFullYear(now.getFullYear() - 5); break;
        default: startDate.setMonth(now.getMonth() - 6);
      }

      const relevantTxs = allTransactions.filter(t => new Date(t.timestamp) >= startDate);
      
      if (relevantTxs.length === 0) {
        const currentTotal = children.reduce((sum, c) => sum + c.spendingBalance + c.savingBalance, 0);
        const currentSpending = children.reduce((sum, c) => sum + c.spendingBalance, 0);
        const currentSaving = children.reduce((sum, c) => sum + c.savingBalance, 0);
        return [{
          date: startDate.toISOString().split('T')[0],
          total: 0,
          spending: 0,
          saving: 0
        }, {
          date: now.toISOString().split('T')[0],
          total: currentTotal,
          spending: currentSpending,
          saving: currentSaving
        }];
      }

      // Build cumulative totals across all kids
      const balancesByChild = {};
      children.forEach(c => {
        balancesByChild[c.id] = { spending: 0, saving: 0 };
      });

      const dataPoints = relevantTxs.map(tx => {
        // Update this child's balance
        balancesByChild[tx.childId] = {
          spending: tx.balanceAfter.spending,
          saving: tx.balanceAfter.saving
        };
        
        // Calculate combined total across all kids
        let totalSpending = 0;
        let totalSaving = 0;
        Object.values(balancesByChild).forEach(bal => {
          totalSpending += bal.spending;
          totalSaving += bal.saving;
        });

        return {
          date: new Date(tx.timestamp).toISOString().split('T')[0],
          total: totalSpending + totalSaving,
          spending: totalSpending,
          saving: totalSaving
        };
      });

      // Group by date and keep only last point per day
      const groupedByDate = {};
      dataPoints.forEach(point => {
        groupedByDate[point.date] = point;
      });
      const uniqueDatePoints = Object.values(groupedByDate);

      // Add current balance as last point
      const currentTotal = children.reduce((sum, c) => sum + c.spendingBalance + c.savingBalance, 0);
      const currentSpending = children.reduce((sum, c) => sum + c.spendingBalance, 0);
      const currentSaving = children.reduce((sum, c) => sum + c.savingBalance, 0);
      const today = now.toISOString().split('T')[0];
      groupedByDate[today] = {
        date: today,
        total: currentTotal,
        spending: currentSpending,
        saving: currentSaving
      };

      return Object.values(groupedByDate).sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    const child = children.find(c => c.id === childId);
    if (!child) return [];

    const childTransactions = transactions
      .filter(t => t.childId === childId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    const now = new Date();
    const startDate = new Date();
    
    switch(range) {
      case '3M': startDate.setMonth(now.getMonth() - 3); break;
      case '6M': startDate.setMonth(now.getMonth() - 6); break;
      case '1Y': startDate.setFullYear(now.getFullYear() - 1); break;
      case '3Y': startDate.setFullYear(now.getFullYear() - 3); break;
      case '5Y': startDate.setFullYear(now.getFullYear() - 5); break;
      default: startDate.setMonth(now.getMonth() - 6);
    }

    const relevantTxs = childTransactions.filter(t => new Date(t.timestamp) >= startDate);
    
    if (relevantTxs.length === 0) {
      return [{
        date: startDate.toISOString().split('T')[0],
        total: 0,
        spending: 0,
        saving: 0
      }, {
        date: now.toISOString().split('T')[0],
        total: child.spendingBalance + child.savingBalance,
        spending: child.spendingBalance,
        saving: child.savingBalance
      }];
    }

    const dataPoints = relevantTxs.map(tx => ({
      date: new Date(tx.timestamp).toISOString().split('T')[0],
      total: tx.balanceAfter.spending + tx.balanceAfter.saving,
      spending: tx.balanceAfter.spending,
      saving: tx.balanceAfter.saving
    }));

    // Group by date and keep only last point per day
    const groupedByDate = {};
    dataPoints.forEach(point => {
      groupedByDate[point.date] = point;
    });

    // Add current balance as last point
    const today = now.toISOString().split('T')[0];
    groupedByDate[today] = {
      date: today,
      total: child.spendingBalance + child.savingBalance,
      spending: child.spendingBalance,
      saving: child.savingBalance
    };

    return Object.values(groupedByDate).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const theme = darkMode ? 'dark' : 'light';
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  // PIN Lock Screen
  if (isLocked) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${bgColor}`}>
        <div className={`${cardBg} p-8 rounded-2xl shadow-xl max-w-md w-full mx-4`}>
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className={`text-2xl font-bold ${textColor}`}>Enter PIN</h2>
            <p className={textSecondary}>Unlock to access Kids Cash</p>
          </div>
          <input
            type="password"
            inputMode="numeric"
            maxLength="6"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && verifyPIN()}
            placeholder="Enter 4-6 digit PIN"
            className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-center text-2xl tracking-widest mb-4`}
          />
          <button
            onClick={verifyPIN}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${cardBg} shadow-sm border-b ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {(currentView !== 'home' && !selectedChild) || (currentView === 'home' && selectedChild) ? (
            <button
              onClick={() => {
                if (selectedChild) {
                  setSelectedChild(null);
                } else {
                  setCurrentView('home');
                }
              }}
              className={`p-2  rounded-lg transition ${textColor}`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          ) : (
            <div className="w-10" />
          )}
          <div className="flex-1 flex justify-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-t from-blue-600 via-green-500 to-green-600 bg-clip-text text-transparent inline-flex items-end">
              Kid<span className="text-3xl -mb-px">$</span>Money
            </h1>
          </div>
          <button
            onClick={() => setShowModal('settings')}
            className={`p-2  rounded-lg transition ${textColor}`}
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-4 pb-24">
        {currentView === 'home' && !selectedChild && (
          // Dashboard View
          <div>
            <div className="mb-3">
              <h2 className={`text-3xl font-bold ${textColor} mb-2`}>Your Family</h2>
              <p className={textSecondary}>Click the big $ icon to add/spend money, or select a kid to view</p>
            </div>

            {/* Total Family Balance */}
            {children.length > 0 && (
              <div className={`${cardBg} rounded-xl p-4 mb-4 shadow-sm border ${borderColor}`}>
                <p className={`text-sm ${textSecondary} mb-1`}>Total Family Balance</p>
                <p className={`text-4xl font-bold text-blue-600`}>
                  {formatCurrency(children.reduce((sum, c) => sum + c.spendingBalance + c.savingBalance, 0))}
                </p>
              </div>
            )}

            {/* Children List */}
            <div className="space-y-3">
              {children.map(child => (
                <button
                  key={child.id}
                  onClick={() => setSelectedChild(child)}
                  className={`${cardBg} rounded-xl p-4 shadow-sm ${
                    child.spendingBalance < 0 || child.savingBalance < 0 
                      ? 'border-2 border-red-600 hover:border-red-700' 
                      : `border ${borderColor} hover:border-blue-400`
                  } hover:shadow-md transition-all duration-200 w-full`}
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {child.avatar ? (
                        <img src={child.avatar} alt={child.name} className="w-14 h-14 rounded-full object-cover" />
                      ) : (
                        <div className={`w-14 h-14 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                          <span className="text-white text-3xl font-bold leading-none">{child.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>

                    {/* Name with icons */}
                    <div className="flex-shrink-0 w-32 flex items-center gap-2">
                      <h3 className={`text-2xl font-semibold ${textColor} text-left`}>{child.name}</h3>
                      {child.allowance?.enabled && <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                      {child.interest?.enabled && <Percent className="w-5 h-5 text-green-600 flex-shrink-0" />}
                    </div>

                    {/* Balances */}
                    <div className="flex-1 flex items-center justify-end gap-3">
                      {/* Spending */}
                      <div className="text-right w-18">
                        <p className={`text-xs ${textSecondary} mb-0.5`}>Spending</p>
                        <p className={`text-2xl font-bold ${
                          child.spendingBalance < 0 ? 'text-red-600' : 'text-green-600 dark:text-green-400'
                        }`}>
                          {formatCurrency(child.spendingBalance)}
                        </p>
                      </div>

                      {/* Savings */}
                      <div className="text-right w-18">
                        <p className={`text-xs ${textSecondary} mb-0.5`}>Savings</p>
                        <p className={`text-2xl font-bold ${
                          child.savingBalance < 0 ? 'text-red-600' : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {formatCurrency(child.savingBalance)}
                        </p>
                      </div>

                      {/* Total */}
                      <div className="text-right w-18">
                        <p className={`text-xs ${textSecondary} mb-0.5`}>Total</p>
                        <p className={`text-2xl font-bold ${
                          (child.spendingBalance + child.savingBalance) < 0 ? 'text-red-600' : textColor
                        }`}>
                          {formatCurrency(child.spendingBalance + child.savingBalance)}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}

              {/* Add Child Button */}
              <button
                onClick={() => setShowModal('addChild')}
                className={`${cardBg} rounded-xl p-4 shadow-sm border-2 border-dashed ${borderColor} hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 w-full flex items-center justify-center gap-3`}
              >
                <Plus className="w-8 h-8 text-blue-600" />
                <span className={`text-lg font-semibold ${textColor}`}>Add New Kid</span>
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {currentView === 'home' && selectedChild && (
          // Child Detail View
          <div>
            {/* Child Header */}
            <div className={`${cardBg} rounded-xl p-6 mb-6 shadow-sm border ${borderColor}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {selectedChild.avatar ? (
                    <img src={selectedChild.avatar} alt={selectedChild.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <div className={`w-16 h-16 rounded-full ${getAvatarGradient(selectedChild.avatarColor)} flex items-center justify-center`}>
                      <span className="text-white text-4xl font-bold leading-none">{selectedChild.name.charAt(0)}</span>
                    </div>
                  )}
                  <h2 className={`text-3xl font-bold ${textColor}`}>{selectedChild.name}</h2>
                </div>
                <div className={`text-3xl font-bold ${textColor}`}>
                  Total: {formatCurrency(selectedChild.spendingBalance + selectedChild.savingBalance)}
                </div>
              </div>

              {/* Balances */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-xl p-3 text-center ${
                  selectedChild.spendingBalance < 0 ? 'bg-red-600' : 'bg-green-600'
                }`}>
                  <p className="text-white font-semibold mb-1 text-sm">Spending</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(selectedChild.spendingBalance)}
                  </p>
                </div>

                <div className={`rounded-xl p-3 text-center ${
                  selectedChild.savingBalance < 0 ? 'bg-red-600' : 'bg-blue-600'
                }`}>
                  <p className="text-white font-semibold mb-1 text-sm">Savings</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(selectedChild.savingBalance)}
                  </p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <BalanceChart
              childId={selectedChild.id}
              balanceType={balanceType}
              setBalanceType={setBalanceType}
              generateChartData={generateChartData}
              darkMode={darkMode}
              cardBg={cardBg}
              textColor={textColor}
              textSecondary={textSecondary}
              borderColor={borderColor}
            />

            {/* Transaction History */}
            <div className={`${cardBg} rounded-xl p-6 shadow-sm border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4 flex items-center`}>
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                Transaction History
              </h3>

              <div className="space-y-3">
                {transactions
                  .filter(t => t.childId === selectedChild.id)
                  .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                  .slice(0, 20)
                  .map(tx => (
                    <div 
                      key={tx.id}
                      onClick={() => {
                        setModalData(tx);
                        setShowModal('editTransaction');
                      }}
                      className={`flex items-center justify-between p-4 rounded-lg border ${borderColor} transition cursor-pointer`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          tx.type === 'deposit' || tx.type === 'allowance' || tx.type === 'interest'
                            ? 'bg-green-600'
                            : tx.type === 'withdrawal'
                            ? 'bg-red-600'
                            : 'bg-blue-600'
                        }`}>
                          {tx.type === 'deposit' ? (
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          ) : tx.type === 'allowance' ? (
                            <Calendar className="w-6 h-6 text-white" />
                          ) : tx.type === 'withdrawal' ? (
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          ) : tx.type === 'interest' ? (
                            <Percent className="w-6 h-6 text-white" />
                          ) : (
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M7 17L17 7M17 7H8M17 7V16" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className={`font-semibold ${textColor}`}>{tx.description}</p>
                          <p className={`text-sm ${textSecondary}`}>
                            {formatDate(tx.timestamp)} • {tx.accountType === 'spending' ? 'Spending' : 'Savings'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl font-bold ${
                          tx.type === 'deposit' || tx.type === 'allowance' || tx.type === 'interest'
                            ? 'text-green-600'
                            : tx.type === 'withdrawal'
                            ? 'text-red-600'
                            : 'text-blue-600'
                        }`}>
                          {tx.type === 'withdrawal' ? '-' : '+'}
                          {formatCurrency(tx.amount)}
                        </p>
                        <p className={`text-sm ${
                          (tx.type === 'allowance' ? tx.balanceAfter.spending : 
                           tx.type === 'interest' ? tx.balanceAfter.saving : 
                           tx.balanceAfter.spending + tx.balanceAfter.saving) < 0 
                            ? 'text-red-600' 
                            : textSecondary
                        }`}>
                          Balance: {formatCurrency(
                            tx.type === 'allowance' 
                              ? tx.balanceAfter.spending 
                              : tx.type === 'interest' 
                              ? tx.balanceAfter.saving 
                              : tx.balanceAfter.spending + tx.balanceAfter.saving
                          )}
                        </p>
                      </div>
                    </div>
                  ))}

                {transactions.filter(t => t.childId === selectedChild.id).length === 0 && (
                  <div className="text-center py-12">
                    <p className={textSecondary}>No transactions yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentView === 'transactions' && (
          // All Transactions View
          <div>
            <div className="mb-3">
              <h2 className={`text-2xl font-bold ${textColor}`}>Transaction History</h2>
            </div>

            {/* Kid Filter */}
            <p className={`text-sm font-semibold ${textSecondary} mb-1`}>Select a kid</p>
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => setTransactionKidFilter(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  !transactionKidFilter
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                All
              </button>
              {children.map(child => (
                <button
                  key={child.id}
                  onClick={() => setTransactionKidFilter(child.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition flex items-center space-x-2 ${
                    transactionKidFilter === child.id
                      ? 'bg-blue-600 text-white'
                      : `${cardBg} border ${borderColor} ${textColor}`
                  }`}
                >
                  {child.avatar ? (
                    <img src={child.avatar} alt={child.name} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className={`w-6 h-6 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{child.name.charAt(0)}</span>
                    </div>
                  )}
                  <span>{child.name}</span>
                </button>
              ))}
            </div>

            {/* Transaction Type Filter */}
            <p className={`text-sm font-semibold ${textSecondary} mb-1`}>Select a transaction type</p>
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                onClick={() => setTransactionTypeFilter(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  !transactionTypeFilter
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                All
              </button>
              <button
                onClick={() => setTransactionTypeFilter('addition')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  transactionTypeFilter === 'addition'
                    ? 'bg-green-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                Add $
              </button>
              <button
                onClick={() => setTransactionTypeFilter('spending')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  transactionTypeFilter === 'spending'
                    ? 'bg-red-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                Spent $
              </button>
              <button
                onClick={() => setTransactionTypeFilter('transfer')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  transactionTypeFilter === 'transfer'
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} `
                }`}
              >
                <ArrowLeftRight className={`w-5 h-5 ${transactionTypeFilter === 'transfer' ? '' : 'text-gray-900 dark:text-white'}`} />
              </button>
              <button
                onClick={() => setTransactionTypeFilter('allowance')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  transactionTypeFilter === 'allowance'
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} `
                }`}
              >
                <Calendar className={`w-5 h-5 ${transactionTypeFilter === 'allowance' ? '' : 'text-blue-600'}`} />
              </button>
              <button
                onClick={() => setTransactionTypeFilter('interest')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  transactionTypeFilter === 'interest'
                    ? 'bg-green-600 text-white'
                    : `${cardBg} border ${borderColor} `
                }`}
              >
                <Percent className={`w-5 h-5 ${transactionTypeFilter === 'interest' ? '' : 'text-green-600'}`} />
              </button>
            </div>

            <div className={`${cardBg} rounded-xl shadow-sm border ${borderColor} overflow-hidden`}>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {transactions.length === 0 ? (
                  <div className="text-center py-12">
                    <p className={textSecondary}>No transactions yet</p>
                  </div>
                ) : (
                  transactions
                    .filter(tx => {
                      // Filter by kid
                      if (transactionKidFilter && tx.childId !== transactionKidFilter) return false;
                      // Filter by type
                      if (transactionTypeFilter === 'addition' && !['deposit'].includes(tx.type)) return false;
                      if (transactionTypeFilter === 'allowance' && tx.type !== 'allowance') return false;
                      if (transactionTypeFilter === 'interest' && tx.type !== 'interest') return false;
                      if (transactionTypeFilter === 'spending' && tx.type !== 'withdrawal') return false;
                      if (transactionTypeFilter === 'transfer' && tx.type !== 'transfer') return false;
                      return true;
                    })
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                    .map(tx => {
                      const child = children.find(c => c.id === tx.childId);
                      return (
                        <div
                          key={tx.id}
                          onClick={() => {
                            setModalData(tx);
                            setShowModal('editTransaction');
                          }}
                          className={`p-4 cursor-pointer transition`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {child && (
                                child.avatar ? (
                                  <img src={child.avatar} alt={child.name} className="w-10 h-10 rounded-full object-cover" />
                                ) : (
                                  <div className={`w-10 h-10 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                                    <span className="text-white text-lg font-bold">{child.name.charAt(0)}</span>
                                  </div>
                                )
                              )}
                              <div>
                                <p className={`font-bold ${
                                  tx.type === 'withdrawal' ? 'text-red-600' : textColor
                                }`}>{tx.description}</p>
                                <p className={`text-xs ${textSecondary}`}>
                                  {child?.name || 'Unknown'} • {formatDate(tx.timestamp)} • {tx.accountType === 'spending' ? 'Spending' : tx.accountType === 'saving' ? 'Savings' : '50/50 Split'}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`text-xl font-bold ${
                                tx.type === 'deposit' || tx.type === 'allowance' || tx.type === 'interest'
                                  ? 'text-green-600'
                                  : tx.type === 'withdrawal'
                                  ? 'text-red-600'
                                  : 'text-blue-600'
                              }`}>
                                {tx.type === 'withdrawal' ? '-' : '+'}
                                {formatCurrency(tx.amount)}
                              </p>
                              <p className={`text-sm ${
                                (tx.type === 'allowance' ? (tx.balanceAfter?.spending || 0) : 
                                 tx.type === 'interest' ? (tx.balanceAfter?.saving || 0) : 
                                 (tx.balanceAfter?.spending || 0) + (tx.balanceAfter?.saving || 0)) < 0 
                                  ? 'text-red-600' 
                                  : textSecondary
                              }`}>
                                Balance: {formatCurrency(
                                  tx.type === 'allowance' 
                                    ? (tx.balanceAfter?.spending || 0)
                                    : tx.type === 'interest' 
                                    ? (tx.balanceAfter?.saving || 0)
                                    : (tx.balanceAfter?.spending || 0) + (tx.balanceAfter?.saving || 0)
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            </div>
          </div>
        )}

        {currentView === 'charts' && (
          // Charts View
          <div>
            <div className="mb-3">
              <h2 className={`text-2xl font-bold ${textColor}`}>Cash Over Time</h2>
            </div>

            {/* Kid Selector */}
            <p className={`text-sm font-semibold ${textSecondary} mb-1`}>Select a kid</p>
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedChild(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  !selectedChild
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                All
              </button>
              {children.map(child => (
                <button
                  key={child.id}
                  onClick={() => setSelectedChild(child)}
                  className={`px-4 py-2 rounded-lg font-semibold transition flex items-center space-x-2 ${
                    selectedChild?.id === child.id
                      ? 'bg-blue-600 text-white'
                      : `${cardBg} border ${borderColor} ${textColor}`
                  }`}
                >
                  {child.avatar ? (
                    <img src={child.avatar} alt={child.name} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className={`w-6 h-6 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{child.name.charAt(0)}</span>
                    </div>
                  )}
                  <span>{child.name}</span>
                </button>
              ))}
            </div>

            {/* Balance Type Filter */}
            <p className={`text-sm font-semibold ${textSecondary} mb-1`}>Select an account type</p>
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                onClick={() => setBalanceType('total')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  balanceType === 'total'
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                Total $
              </button>
              <button
                onClick={() => setBalanceType('spending')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  balanceType === 'spending'
                    ? 'bg-green-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                Spending Acc
              </button>
              <button
                onClick={() => setBalanceType('saving')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  balanceType === 'saving'
                    ? 'bg-blue-600 text-white'
                    : `${cardBg} border ${borderColor} ${textColor}`
                }`}
              >
                Savings Acc
              </button>
            </div>

            {/* Chart */}
            <BalanceChart
              childId={selectedChild?.id || 'all'}
              balanceType={balanceType}
              generateChartData={generateChartData}
              darkMode={darkMode}
              cardBg={cardBg}
              textColor={textColor}
              textSecondary={textSecondary}
              borderColor={borderColor}
              showTitle={false}
            />
          </div>
        )}

        {currentView === 'recurring' && (
          // Recurring View
          <div>
            <div className="mb-3">
              <h2 className={`text-2xl font-bold ${textColor}`}>Recurring Payments</h2>
              <p className={`text-sm ${textSecondary} mt-1`}>Allowance / Interest settings can be changed in Settings → Manage Kids</p>
            </div>

            {/* Automatic Allowances */}
            <div className={`${cardBg} rounded-xl p-4 pt-4 mb-6 shadow-sm border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4 flex items-center`}>
                <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                Automatic Allowances
                <button
                  onClick={() => setShowAllowanceHelp(true)}
                  className={`p-1 ml-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </h3>
              <div className="space-y-3">
                {children.filter(c => c.allowance?.enabled).length === 0 ? (
                  <p className={`${textSecondary} text-center py-4`}>No kids have automatic allowance enabled</p>
                ) : (
                  children.filter(c => c.allowance?.enabled).map(child => (
                    <div key={child.id} className={`flex items-center justify-between p-4 rounded-lg border ${borderColor}`}>
                      <div className="flex items-center space-x-3">
                        {child.avatar ? (
                          <img src={child.avatar} alt={child.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className={`w-10 h-10 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                            <span className="text-white text-lg font-bold">{child.name.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <p className={`font-semibold ${textColor}`}>{child.name}</p>
                          <p className={`text-sm ${textSecondary}`}>
                            {formatCurrency(child.allowance.amount)} {formatFrequency(child.allowance.frequency)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Next Payment */}
                        <div className="text-right">
                          <p className={`text-sm ${textSecondary}`}>Next Payment</p>
                          <p className={`font-semibold ${textColor}`}>
                            {child.allowance?.paused ? 'Paused' : formatDateOnly(child.allowance.nextPaymentDate)}
                          </p>
                        </div>
                        
                        {/* Skip Button */}
                        <button
                          onClick={() => toggleAllowanceSkip(child.id)}
                          className={`px-3 py-1.5 rounded border text-sm font-semibold transition ${
                            child.allowance?.skipped
                              ? 'bg-yellow-400 border-yellow-500 text-gray-900'
                              : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          Skip
                        </button>
                        
                        {/* Pause Button */}
                        <button
                          onClick={() => toggleAllowancePause(child.id)}
                          className={`p-2 rounded border transition ${
                            child.allowance?.paused
                              ? 'bg-yellow-400 border-yellow-500'
                              : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Interest Payments */}
            <div className={`${cardBg} rounded-xl p-4 pt-4 shadow-sm border ${borderColor}`}>
              <h3 className={`text-xl font-bold ${textColor} mb-4 flex items-center`}>
                <Percent className="w-6 h-6 mr-2 text-green-600" />
                Interest Payments
                <button
                  onClick={() => setShowInterestHelp(true)}
                  className={`p-1 ml-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </h3>
              <div className="space-y-3">
                {children.filter(c => c.interest?.enabled).length === 0 ? (
                  <p className={`${textSecondary} text-center py-4`}>No kids have interest enabled</p>
                ) : (
                  children.filter(c => c.interest?.enabled).map(child => (
                    <div key={child.id} className={`flex items-center justify-between p-4 rounded-lg border ${borderColor}`}>
                      <div className="flex items-center space-x-3">
                        {child.avatar ? (
                          <img src={child.avatar} alt={child.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className={`w-10 h-10 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center`}>
                            <span className="text-white text-lg font-bold">{child.name.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <p className={`font-semibold ${textColor}`}>{child.name}</p>
                          <p className={`text-sm ${textSecondary}`}>
                            {(() => {
                              const rate = child.interest.rate / 100;
                              const frequency = child.interest.frequency;
                              const ratePerPeriod = frequency === 'monthly' ? rate / 12 : rate;
                              const interestAmount = Math.round(child.savingBalance * ratePerPeriod);
                              const monthlyRate = ((child.interest.rate / 12)).toFixed(2);
                              return `$${Math.round(child.savingBalance)} × ${monthlyRate}% = $${interestAmount}`;
                            })()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Next Payment */}
                        <div className="text-right">
                          <p className={`text-sm ${textSecondary}`}>Next Payment</p>
                          <p className={`font-semibold ${textColor}`}>
                            {child.interest?.paused ? 'Paused' : formatDateOnly(child.interest.nextPaymentDate)}
                          </p>
                        </div>
                        
                        {/* Pause Button */}
                        <button
                          onClick={() => toggleInterestPause(child.id)}
                          className={`p-2 rounded border transition ${
                            child.interest?.paused
                              ? 'bg-yellow-400 border-yellow-500'
                              : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      {showModal === 'addChild' && (
        <AddChildModal
          onClose={() => setShowModal(null)}
          onSave={(childData) => {
            addChild(childData);
            setShowModal(null);
          }}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {showModal === 'editChild' && (
        <EditChildModal
          child={modalData}
          onClose={() => {
            setShowModal(null);
            setModalData({});
          }}
          onSave={(updates) => {
            updateChild(modalData.id, updates);
            setSelectedChild({ ...selectedChild, ...updates });
            setShowModal(null);
            setModalData({});
            showToast('Child updated!', 'success');
          }}
          onDelete={(childId) => {
            deleteChild(childId);
            setShowModal(null);
            setModalData({});
            setSelectedChild(null);
            showToast('Kid deleted!', 'success');
          }}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {showModal === 'quickTransaction' && (
        <QuickTransactionModal
          children={children}
          onClose={() => setShowModal(null)}
          onOpenTransaction={(childIds, type) => {
            setShowModal(null);
            setTimeout(() => {
              // Handle both single childId and array of childIds
              const ids = Array.isArray(childIds) ? childIds : [childIds];
              setModalData({ childIds: ids, type });
              setShowModal('transaction');
            }, 100);
          }}
          onOpenTransfer={(child) => {
            setShowModal(null);
            setTimeout(() => {
              setSelectedChild(child);
              setModalData({ childId: child.id });
              setShowModal('transfer');
            }, 100);
          }}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {showModal === 'transaction' && (
        <TransactionModal
          data={modalData}
          onClose={() => {
            setShowModal(null);
            setModalData({});
          }}
          onSave={addTransaction}
          children={children}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
          settings={settings}
          onUpdateSettings={(updates) => setSettings({ ...settings, ...updates })}
        />
      )}

      {showModal === 'transfer' && (
        <TransferModal
          childId={modalData.childId}
          child={selectedChild}
          onClose={() => {
            setShowModal(null);
            setModalData({});
          }}
          onSave={addTransaction}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {showModal === 'settings' && (
        <SettingsModal
          settings={settings}
          children={children}
          onClose={() => setShowModal(null)}
          onSave={(newSettings) => {
            setSettings({ ...settings, ...newSettings });
            if (newSettings.darkMode !== undefined) setDarkMode(newSettings.darkMode);
            setShowModal(null);
            showToast('Settings saved!', 'success');
          }}
          onEditChild={(child) => {
            setModalData(child);
            setShowModal('editChild');
          }}
          onDeleteChild={(childId) => {
            deleteChild(childId);
            showToast('Kid deleted!', 'success');
          }}
          onExport={exportData}
          onImport={importData}
          onLock={() => {
            setIsLocked(true);
            setShowModal(null);
          }}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
          requirePIN={requirePIN}
        />
      )}

      {showModal === 'editTransaction' && (
        <EditTransactionModal
          transaction={modalData}
          onClose={() => {
            setShowModal(null);
            setModalData({});
          }}
          onDelete={deleteTransaction}
          onEdit={editTransaction}
          requirePIN={requirePIN}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {showModal === 'viewTransaction' && (
        <EditTransactionModal
          transaction={modalData}
          onClose={() => {
            setShowModal(null);
            setModalData({});
          }}
          onDelete={deleteTransaction}
          onEdit={editTransaction}
          requirePIN={requirePIN}
          darkMode={darkMode}
          cardBg={cardBg}
          textColor={textColor}
          textSecondary={textSecondary}
          borderColor={borderColor}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-20 right-4 ${
          toast.type === 'success' ? 'bg-green-600' 
          : toast.type === 'error' ? 'bg-red-600' 
          : 'bg-blue-600'
        } text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-slide-up z-50`}>
          {toast.type === 'success' && <Check className="w-5 h-5" />}
          <span className="font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Bottom Navigation Bar - Sticky */}
      <nav className={`fixed bottom-0 left-0 right-0 ${cardBg} border-t ${borderColor} shadow-lg z-40`}>
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex items-center justify-around">
            {/* Home */}
            <button
              onClick={() => {
                setCurrentView('home');
                setSelectedChild(null);
              }}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition ${
                currentView === 'home' ? 'text-green-600' : `${textSecondary} hover:text-green-600`
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-semibold">Home</span>
            </button>

            {/* Recurring */}
            <button
              onClick={() => {
                setCurrentView('recurring');
                setSelectedChild(null);
              }}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition ${
                currentView === 'recurring' ? 'text-green-600' : `${textSecondary} hover:text-green-600`
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-semibold">Recurring</span>
            </button>

            {/* Quick Add Transaction */}
            <button
              onClick={() => requirePIN(() => setShowModal('quickTransaction'))}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition bg-gradient-to-t from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 -mt-6 shadow-2xl`}
            >
              <div className="bg-gradient-to-t from-blue-500 to-green-500 rounded-full p-3">
                <DollarSign className="w-8 h-8" />
              </div>
            </button>

            {/* Charts - Temporarily disabled for browser compatibility
            <button
              onClick={() => {
                setCurrentView('charts');
                setSelectedChild(null);
              }}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition ${
                currentView === 'charts' ? 'text-green-600' : `${textSecondary} hover:text-green-600`
              }`}
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs font-semibold">Charts</span>
            </button>
            */}

            {/* Transactions */}
            <button
              onClick={() => {
                setCurrentView('transactions');
                setSelectedChild(null);
              }}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition ${
                currentView === 'transactions' ? 'text-green-600' : `${textSecondary} hover:text-green-600`
              }`}
            >
              <Receipt className="w-6 h-6" />
              <span className="text-xs font-semibold">Transactions</span>
            </button>
          </div>
        </div>
      </nav>

      <InterestHelpModal 
        show={showInterestHelp} 
        onClose={() => setShowInterestHelp(false)} 
        cardBg={cardBg} 
        textColor={textColor} 
        textSecondary={textSecondary} 
        borderColor={borderColor} 
      />
      <AllowanceHelpModal 
        show={showAllowanceHelp} 
        onClose={() => setShowAllowanceHelp(false)} 
        cardBg={cardBg} 
        textColor={textColor} 
        textSecondary={textSecondary} 
        borderColor={borderColor} 
      />
    </div>
  );
}

// Balance Chart Component
function BalanceChart({ childId, balanceType, setBalanceType, generateChartData, darkMode, cardBg, textColor, textSecondary, borderColor, showTitle = true }) {
  const [timeRange, setTimeRange] = useState('6M');
  const chartData = generateChartData(childId, timeRange);

  const dataKey = balanceType === 'total' ? 'total' : balanceType === 'spending' ? 'spending' : 'saving';
  const chartColor = balanceType === 'spending' ? '#10b981' : balanceType === 'saving' ? '#3b82f6' : '#0070ba';

  // Calculate max Y value from total (so all three views share same scale)
  const maxTotal = Math.max(...chartData.map(d => d.total || 0));
  const minTotal = Math.min(...chartData.map(d => d[dataKey] || 0));
  
  // Round to nice numbers for Y-axis
  const getNiceMax = (value) => {
    if (value === 0) return 100;
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / magnitude;
    let niceValue;
    if (normalized <= 1) niceValue = 1;
    else if (normalized <= 2) niceValue = 2;
    else if (normalized <= 5) niceValue = 5;
    else niceValue = 10;
    return niceValue * magnitude;
  };
  
  const yAxisMax = getNiceMax(maxTotal * 1.15); // Add 15% padding
  const yAxisMin = minTotal < 0 ? Math.floor(minTotal * 1.15) : 0; // Add 15% padding for negatives

  // Format dates as MM-DD-YY
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}-${day}-${year}`;
  };

  return (
    <div className={`${cardBg} rounded-xl p-6 mb-6 shadow-sm border ${borderColor}`}>
      {showTitle && <h3 className={`text-xl font-bold ${textColor} mb-4`}>Cash Over Time</h3>}
      
      {/* Balance Type Filter - only show if setBalanceType is provided */}
      {setBalanceType && (
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setBalanceType('total')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              balanceType === 'total'
                ? 'bg-blue-600 text-white'
                : `${cardBg} border ${borderColor} ${textColor}`
            }`}
          >
            Total $
          </button>
          <button
            onClick={() => setBalanceType('spending')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              balanceType === 'spending'
                ? 'bg-green-600 text-white'
                : `${cardBg} border ${borderColor} ${textColor}`
            }`}
          >
            Spending Acc
          </button>
          <button
            onClick={() => setBalanceType('saving')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              balanceType === 'saving'
                ? 'bg-blue-600 text-white'
                : `${cardBg} border ${borderColor} ${textColor}`
            }`}
          >
            Savings Acc
          </button>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {['3M', '6M', '1Y', '3Y', '5Y'].map(range => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              timeRange === range
                ? 'bg-blue-600 text-white'
                : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white`
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={chartColor} stopOpacity={0.4}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#ffffff' : '#000000'} strokeOpacity={0.3} />
          <XAxis 
            dataKey="date"
            tickFormatter={formatDate}
            stroke={darkMode ? '#ffffff' : '#000000'}
            tick={{ fontSize: 12, fill: darkMode ? '#ffffff' : '#000000' }}
          />
          <YAxis 
            domain={[yAxisMin, yAxisMax]}
            stroke={darkMode ? '#ffffff' : '#000000'}
            tick={{ fontSize: 12, fill: darkMode ? '#ffffff' : '#000000' }}
            tickFormatter={(value) => `$${Math.round(value)}`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: darkMode ? '#1f2937' : '#ffffff',
              border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: darkMode ? '#f3f4f6' : '#111827'
            }}
            formatter={(value) => formatCurrency(value)}
            labelFormatter={formatDate}
          />
          <Area 
            type="monotone" 
            dataKey={dataKey}
            stroke={chartColor}
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorBalance)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// Interest Help Modal Component (reusable)
function InterestHelpModal({ show, onClose, cardBg, textColor, textSecondary, borderColor }) {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className={`${cardBg} rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${textColor}`}>What is Savings Interest?</h3>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={`${textColor} space-y-4`}>
          <p>Just like in real life, your child can accrue monthly interest payments. This can help your child begin to understand the importance of saving and investing money to let it grow over time.</p>
          
          <ul className={`list-disc list-inside space-y-2 ${textColor}`}>
            <li>Interest accrues ONLY on money in the Savings account.</li>
            <li>This is simple interest, meaning it calculates the interest payment based on the current balance on the payment date.</li>
            <li>The interest payment is automatically added to the Savings account on the payment date.</li>
          </ul>

          <div className={`${borderColor} border rounded-lg p-4 bg-gray-100 dark:bg-white`}>
            <p className={`font-semibold mb-2 text-gray-900`}>Example:</p>
            <p className={`mb-2 text-gray-600`}>10% yearly interest, pays 0.83% monthly (10% ÷ 12)</p>
            
            <div className="space-y-2">
              <div>
                <p className={`font-medium text-gray-900`}>If $100 in Savings:</p>
                <p className={`ml-4 text-gray-600`}>$100 × 0.83% = $0.83 paid monthly</p>
              </div>
              
              <div>
                <p className={`font-medium text-gray-900`}>If $1,000 in Savings:</p>
                <p className={`ml-4 text-gray-600`}>$1,000 × 0.83% = $8.30 paid monthly</p>
              </div>
            </div>
            
            <p className={`mt-3 text-sm italic text-gray-600`}>Interest payments are rounded to the nearest whole number. Anything less than 50 cents will show up as $0.</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition mt-4"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

// Allowance Help Modal Component (reusable)
function AllowanceHelpModal({ show, onClose, cardBg, textColor, textSecondary, borderColor }) {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className={`${cardBg} rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${textColor}`}>What is Automatic Allowance?</h3>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={`${textColor} space-y-4`}>
          <p>Just like it sounds! You can set up automatic allowance payments to your kids Spending account based on the $ amount and frequency you choose.</p>
          
          <p className={`font-semibold ${textColor}`}>On the Recurring Payments page, you can choose from the following options:</p>
          
          <ul className={`list-disc list-inside space-y-2 ${textColor}`}>
            <li><span className="font-semibold">Skip:</span> This will skip only the next upcoming payment.</li>
            <li><span className="font-semibold">Pause:</span> This will pause all future allowance until you un-pause it.</li>
          </ul>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition mt-4"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

// Add Child Modal
function AddChildModal({ onClose, onSave, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [showInterestHelp, setShowInterestHelp] = useState(false);
  const [showAllowanceHelp, setShowAllowanceHelp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    avatar: null,
    avatarColor: 'blue',
    spendingBalance: 0,
    savingBalance: 0,
    allowance: {
      enabled: false,
      amount: 10,
      frequency: 'biweekly',
      nextPaymentDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    interest: {
      enabled: false,
      rate: 10.0,
      frequency: 'monthly',
      nextPaymentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const croppedImage = await cropImageToSquare(file);
      setFormData({ ...formData, avatar: croppedImage });
    }
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto`}>
        <div className={`sticky top-0 ${cardBg} border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${textColor}`}>Add New Kid</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Avatar and Name Section */}
          <div className="flex gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center flex-shrink-0">
              {formData.avatar ? (
                <img src={formData.avatar} alt="Avatar" className="w-32 h-32 rounded-full object-cover mb-3" />
              ) : (
                <div className={`w-32 h-32 rounded-full ${getAvatarGradient(formData.avatarColor)} flex items-center justify-center mb-3`}>
                  <span className="text-white text-6xl font-bold leading-none">{formData.name ? formData.name.charAt(0).toUpperCase() : '?'}</span>
                </div>
              )}
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition text-sm">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                {formData.avatar ? 'Change Photo' : 'Upload Photo'}
              </label>
            </div>

            {/* Name and Color Picker */}
            <div className="flex-1 space-y-4">
              <div>
                <label className={`block text-sm font-semibold ${textColor} mb-2`}>Kid's Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter name"
                  className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
                />
              </div>
              
              {/* Color Picker - only show if no photo */}
              {!formData.avatar && (
                <div>
                  <label className={`block text-sm font-semibold ${textColor} mb-2`}>Or Choose Icon Color</label>
                  <div className="flex gap-2 flex-wrap">
                    {Object.keys(avatarColors).map(color => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setFormData({ ...formData, avatarColor: color })}
                        className={`w-6 h-6 rounded-full ${getAvatarGradient(color)} transition-transform ${
                          formData.avatarColor === color ? 'ring-2 ring-gray-400 scale-110' : 'hover:scale-105'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Starting Balance */}
          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>Starting Balance for each Account type:</label>
            <div className="flex gap-2">
              <input
                type="number"
                onChange={(e) => setFormData({ ...formData, spendingBalance: parseFloat(e.target.value) || 0 })}
                placeholder="Spending $0"
                className={`w-30 px-2 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-center`}
              />
              <input
                type="number"
                onChange={(e) => setFormData({ ...formData, savingBalance: parseFloat(e.target.value) || 0 })}
                placeholder="Savings $0"
                className={`w-30 px-2 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-center`}
              />
            </div>
          </div>

          {/* Allowance */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <label htmlFor="allowance-enabled" className={`font-semibold ${textColor} cursor-pointer`}>
                  Automatic Allowance
                </label>
                <button
                  type="button"
                  onClick={() => setShowAllowanceHelp(true)}
                  className={`p-1 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="checkbox"
                id="allowance-enabled"
                checked={formData.allowance.enabled}
                onChange={(e) => setFormData({
                  ...formData,
                  allowance: { ...formData.allowance, enabled: e.target.checked }
                })}
                className="w-5 h-5 accent-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-3">
              <div style={{width: '30%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Amount</label>
                <div className="relative">
                  <DollarSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondary}`} />
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.allowance.amount}
                    onChange={(e) => setFormData({
                      ...formData,
                      allowance: { ...formData.allowance, amount: parseFloat(e.target.value) || 0 }
                    })}
                    disabled={!formData.allowance.enabled}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Frequency</label>
                <select
                  value={formData.allowance.frequency}
                  onChange={(e) => {
                    const frequency = e.target.value;
                    const daysMap = { weekly: 7, biweekly: 14, monthly: 30 };
                    const days = daysMap[frequency];
                    setFormData({
                      ...formData,
                      allowance: { 
                        ...formData.allowance, 
                        frequency,
                        nextPaymentDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                      }
                    });
                  }}
                  disabled={!formData.allowance.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Next Payment</label>
                <input
                  type="date"
                  value={formData.allowance.nextPaymentDate}
                  onChange={(e) => setFormData({
                    ...formData,
                    allowance: { ...formData.allowance, nextPaymentDate: e.target.value }
                  })}
                  disabled={!formData.allowance.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
            </div>
          </div>


          {/* Interest */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Percent className="w-5 h-5 text-green-600" />
                <label htmlFor="interest-enabled" className={`font-semibold ${textColor} cursor-pointer`}>
                  Savings Interest
                </label>
                <button
                  type="button"
                  onClick={() => setShowInterestHelp(true)}
                  className={`p-1 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="checkbox"
                id="interest-enabled"
                checked={formData.interest.enabled}
                onChange={(e) => setFormData({
                  ...formData,
                  interest: { ...formData.interest, enabled: e.target.checked }
                })}
                className="w-5 h-5 accent-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-3">
              <div style={{width: '40%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Yearly Interest Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.interest.rate}
                  onChange={(e) => setFormData({
                    ...formData,
                    interest: { ...formData.interest, rate: parseFloat(e.target.value) || 0 }
                  })}
                  disabled={!formData.interest.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.interest.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
              <div style={{width: '25%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>
                  {formData.interest.rate > 0 ? '= ' + (formData.interest.rate / 12).toFixed(2) + '% Paid' : 'Paid'}
                </label>
                <input
                  type="text"
                  value="Monthly"
                  disabled
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} opacity-50 cursor-not-allowed text-center`}
                />
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Next Payment</label>
                <input
                  type="date"
                  value={formData.interest.nextPaymentDate}
                  onChange={(e) => setFormData({
                    ...formData,
                    interest: { ...formData.interest, nextPaymentDate: e.target.value }
                  })}
                  disabled={!formData.interest.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.interest.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Add Child
            </button>
          </div>
        </div>
      </div>

      <InterestHelpModal show={showInterestHelp} onClose={() => setShowInterestHelp(false)} cardBg={cardBg} textColor={textColor} textSecondary={textSecondary} borderColor={borderColor} />
      <AllowanceHelpModal show={showAllowanceHelp} onClose={() => setShowAllowanceHelp(false)} cardBg={cardBg} textColor={textColor} textSecondary={textSecondary} borderColor={borderColor} />
    </div>

  );
}

// Edit Kid Modal (similar to Add Child)
function EditChildModal({ child, onClose, onSave, onDelete, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [showInterestHelp, setShowInterestHelp] = useState(false);
  const [showAllowanceHelp, setShowAllowanceHelp] = useState(false);
  const [formData, setFormData] = useState({
    name: child.name,
    avatar: child.avatar,
    avatarColor: child.avatarColor || 'blue',
    allowance: child.allowance || {
      enabled: false,
      amount: 10,
      frequency: 'biweekly',
      nextPaymentDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    interest: child.interest || {
      enabled: false,
      rate: 10.0,
      frequency: 'monthly',
      nextPaymentDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const croppedImage = await cropImageToSquare(file);
      setFormData({ ...formData, avatar: croppedImage });
    }
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }
    
    // Always use the current formData values (which includes any manual edits)
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto`}>
        <div className={`sticky top-0 ${cardBg} border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${textColor}`}>Edit Kid</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            {formData.avatar ? (
              <img src={formData.avatar} alt="Avatar" className="w-32 h-32 rounded-full object-cover mb-4" />
            ) : (
              <div className={`w-32 h-32 rounded-full ${getAvatarGradient(formData.avatarColor)} flex items-center justify-center mb-4`}>
                <span className="text-white text-6xl font-bold leading-none">{formData.name.charAt(0)}</span>
              </div>
            )}
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition mb-4">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              {formData.avatar ? 'Change Photo' : 'Upload Photo'}
            </label>
            
            {/* Color Picker - only show if no photo */}
            {!formData.avatar && (
              <div className="w-full">
                <label className={`block text-sm font-semibold ${textColor} mb-2 text-center`}>Or Choose Icon Color</label>
                <div className="flex justify-center gap-2 flex-wrap">
                  {Object.keys(avatarColors).map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setFormData({ ...formData, avatarColor: color })}
                      className={`w-6 h-6 rounded-full ${getAvatarGradient(color)} transition-transform ${
                        formData.avatarColor === color ? 'ring-2 ring-gray-400 scale-110' : 'hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Name with Delete Button */}
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className={`block text-sm font-semibold ${textColor} mb-2`}>Kid's Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter name"
                className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
              />
            </div>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition flex items-center space-x-2"
            >
              <Trash2 className="w-5 h-5" />
              <span>Delete Kid</span>
            </button>
          </div>

          {/* Allowance */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <label htmlFor="allowance-enabled" className={`font-semibold ${textColor} cursor-pointer`}>
                  Automatic Allowance
                </label>
                <button
                  type="button"
                  onClick={() => setShowAllowanceHelp(true)}
                  className={`p-1 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="checkbox"
                id="allowance-enabled"
                checked={formData.allowance.enabled}
                onChange={(e) => setFormData({
                  ...formData,
                  allowance: { ...formData.allowance, enabled: e.target.checked }
                })}
                className="w-5 h-5 accent-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-3">
              <div style={{width: '30%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Amount</label>
                <div className="relative">
                  <DollarSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondary}`} />
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.allowance.amount}
                    onChange={(e) => setFormData({
                      ...formData,
                      allowance: { ...formData.allowance, amount: parseFloat(e.target.value) || 0 }
                    })}
                    disabled={!formData.allowance.enabled}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Frequency</label>
                <select
                  value={formData.allowance.frequency}
                  onChange={(e) => {
                    const frequency = e.target.value;
                    const daysMap = { weekly: 7, biweekly: 14, monthly: 30 };
                    const days = daysMap[frequency];
                    setFormData({
                      ...formData,
                      allowance: { 
                        ...formData.allowance, 
                        frequency,
                        nextPaymentDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                      }
                    });
                  }}
                  disabled={!formData.allowance.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Next Payment</label>
                <input
                  type="date"
                  value={formData.allowance.nextPaymentDate}
                  onChange={(e) => setFormData({
                    ...formData,
                    allowance: { ...formData.allowance, nextPaymentDate: e.target.value }
                  })}
                  disabled={!formData.allowance.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.allowance.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
            </div>
          </div>


          {/* Interest */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Percent className="w-5 h-5 text-green-600" />
                <label htmlFor="interest-enabled" className={`font-semibold ${textColor} cursor-pointer`}>
                  Savings Interest
                </label>
                <button
                  type="button"
                  onClick={() => setShowInterestHelp(true)}
                  className={`p-1 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition ${textSecondary}`}
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="checkbox"
                id="interest-enabled"
                checked={formData.interest.enabled}
                onChange={(e) => setFormData({
                  ...formData,
                  interest: { ...formData.interest, enabled: e.target.checked }
                })}
                className="w-5 h-5 accent-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex gap-3">
              <div style={{width: '40%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Yearly Interest Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.interest.rate}
                  onChange={(e) => setFormData({
                    ...formData,
                    interest: { ...formData.interest, rate: parseFloat(e.target.value) || 0 }
                  })}
                  disabled={!formData.interest.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.interest.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
              <div style={{width: '25%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>
                  {formData.interest.rate > 0 ? '= ' + (formData.interest.rate / 12).toFixed(2) + '% Paid' : 'Paid'}
                </label>
                <input
                  type="text"
                  value="Monthly"
                  disabled
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} opacity-50 cursor-not-allowed text-center`}
                />
              </div>
              <div style={{width: '35%'}}>
                <label className={`block text-sm ${textSecondary} mb-1`}>Next Payment</label>
                <input
                  type="date"
                  value={formData.interest.nextPaymentDate}
                  onChange={(e) => setFormData({
                    ...formData,
                    interest: { ...formData.interest, nextPaymentDate: e.target.value }
                  })}
                  disabled={!formData.interest.enabled}
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor} ${!formData.interest.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${cardBg} rounded-xl p-6 max-w-sm w-full`}>
            <h3 className={`text-xl font-bold ${textColor} mb-4`}>Delete {child.name}?</h3>
            <p className={`${textSecondary} mb-6`}>
              Are you sure you want to delete {child.name}? This will also delete all their transactions. This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className={`flex-1 py-2 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition font-semibold`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(child.id);
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <InterestHelpModal show={showInterestHelp} onClose={() => setShowInterestHelp(false)} cardBg={cardBg} textColor={textColor} textSecondary={textSecondary} borderColor={borderColor} />
      <AllowanceHelpModal show={showAllowanceHelp} onClose={() => setShowAllowanceHelp(false)} cardBg={cardBg} textColor={textColor} textSecondary={textSecondary} borderColor={borderColor} />
    </div>
  );
}

// Transaction Modal
function TransactionModal({ data, onClose, onSave, children, darkMode, cardBg, textColor, textSecondary, borderColor, settings, onUpdateSettings }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [accountType, setAccountType] = useState('spending');
  const [editingQuickDesc, setEditingQuickDesc] = useState(false);
  const [newQuickDesc, setNewQuickDesc] = useState('');

  const childIds = data.childIds || [data.childId]; // Support both single and multiple
  const isMultiple = childIds.length > 1;
  
  const currentType = data.type === 'deposit' ? 'deposit' : 'withdrawal';

  const addQuickDesc = () => {
    if (!newQuickDesc.trim()) return;
    const updated = {
      ...settings.quickDescriptions,
      [currentType]: [...settings.quickDescriptions[currentType], newQuickDesc.trim()]
    };
    onUpdateSettings({ quickDescriptions: updated });
    setNewQuickDesc('');
  };

  const removeQuickDesc = (index) => {
    const updated = {
      ...settings.quickDescriptions,
      [currentType]: settings.quickDescriptions[currentType].filter((_, i) => i !== index)
    };
    onUpdateSettings({ quickDescriptions: updated });
  };
  
  // Get child names for display
  const childNames = childIds.map(id => {
    const child = children.find(c => c.id === id);
    return child ? child.name : 'Unknown';
  }).join(', ');

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }

    
    // Create transaction for each child
    childIds.forEach((childId, index) => {
      const isLast = index === childIds.length - 1;
      const child = children.find(c => c.id === childId);
      onSave({
        childId,
        type: data.type,
        amount: numAmount,
        accountType,
        description,
        childName: child ? child.name : 'Unknown',
        skipModalClose: !isLast // Only close modal on last transaction
      });
    });
  };

  const placeholderText = data.type === 'deposit' 
    ? 'e.g., Birthday money from Grandma'
    : 'e.g., Bought a toy at the store';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full`}>
        <div className={`border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${textColor}`}>
            {data.type === 'deposit' ? 'Add Money' : 'Spend Money'} - {childNames}
          </h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>
              {data.type === 'deposit' ? 'Amount to Add' : 'Amount to Spend'} *
            </label>
            <div className="relative">
              <DollarSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondary}`} />
              <input
                type="number"
                min="0"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-xl`}
                autoFocus
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>Description *</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={placeholderText}
              className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
            />
            
            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              {data.type === 'deposit' ? (
                <>
                  {settings.quickDescriptions.deposit.map((desc, idx) => (
                    <div key={desc} className="relative">
                      <button 
                        type="button" 
                        onClick={() => !editingQuickDesc && setDescription(desc)} 
                        className={`px-3 py-1 text-xs rounded-full border ${borderColor} ${textColor} ${editingQuickDesc ? 'cursor-default' : ''}`}
                        disabled={editingQuickDesc}
                      >
                        {desc}
                      </button>
                      {editingQuickDesc && (
                        <button
                          type="button"
                          onClick={() => removeQuickDesc(idx)}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {settings.quickDescriptions.withdrawal.map((desc, idx) => (
                    <div key={desc} className="relative">
                      <button 
                        type="button" 
                        onClick={() => !editingQuickDesc && setDescription(desc)} 
                        className={`px-3 py-1 text-xs rounded-full border ${borderColor} ${textColor} ${editingQuickDesc ? 'cursor-default' : ''}`}
                        disabled={editingQuickDesc}
                      >
                        {desc}
                      </button>
                      {editingQuickDesc && (
                        <button
                          type="button"
                          onClick={() => removeQuickDesc(idx)}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </>
              )}
              <button
                type="button"
                onClick={() => setEditingQuickDesc(!editingQuickDesc)}
                className="px-3 py-1 text-xs rounded-full text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                {editingQuickDesc ? 'Done' : 'Edit'}
              </button>
            </div>
            {editingQuickDesc && (
              <div className="flex space-x-2 mt-2">
                <input
                  type="text"
                  value={newQuickDesc}
                  onChange={(e) => setNewQuickDesc(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addQuickDesc()}
                  placeholder="Add new description"
                  className={`flex-1 px-3 py-2 text-sm rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
                />
                <button
                  type="button"
                  onClick={addQuickDesc}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setEditingQuickDesc(false)}
                  className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>
              {data.type === 'deposit' ? 'Choose which account to Add to' : 'Choose which account to Spend from'}
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setAccountType('spending')}
                className={`py-3 px-4 rounded-lg font-semibold transition ${
                  accountType === 'spending'
                    ? 'bg-green-600 text-white'
                    : `border ${borderColor} ${textColor} `
                }`}
              >
                Spending
              </button>
              <button
                onClick={() => setAccountType('split')}
                className={`py-3 px-4 rounded-lg font-semibold transition ${
                  accountType === 'split'
                    ? 'bg-purple-600 text-white'
                    : `border ${borderColor} ${textColor} `
                }`}
              >
                50/50 Split
              </button>
              <button
                onClick={() => setAccountType('saving')}
                className={`py-3 px-4 rounded-lg font-semibold transition ${
                  accountType === 'saving'
                    ? 'bg-blue-600 text-white'
                    : `border ${borderColor} ${textColor} `
                }`}
              >
                Savings
              </button>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor}  transition`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition ${
                data.type === 'deposit' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {data.type === 'deposit' ? 'Add Money' : 'Spend Money'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Transfer Modal
function TransferModal({ childId, child, onClose, onSave, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('spending');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (!numAmount || numAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    onSave({
      childId,
      type: 'transfer',
      amount: numAmount,
      accountType: fromAccount === 'spending' ? 'saving' : 'spending',
      description: description || `Transfer from ${fromAccount} to ${fromAccount === 'spending' ? 'saving' : 'spending'}`,
      metadata: {
        fromAccount,
        toAccount: fromAccount === 'spending' ? 'saving' : 'spending'
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full`}>
        <div className={`border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-2xl font-bold ${textColor}`}>Transfer Money</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>Amount *</label>
            <div className="relative">
              <DollarSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondary}`} />
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-xl`}
                autoFocus
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>From</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFromAccount('spending')}
                className={`py-3 px-4 rounded-lg font-semibold transition ${
                  fromAccount === 'spending'
                    ? 'bg-green-600 text-white'
                    : `border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900`
                }`}
              >
                Spending
                <div className="text-xs mt-1">{formatCurrency(child.spendingBalance)}</div>
              </button>
              <button
                onClick={() => setFromAccount('saving')}
                className={`py-3 px-4 rounded-lg font-semibold transition ${
                  fromAccount === 'saving'
                    ? 'bg-blue-600 text-white'
                    : `border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900`
                }`}
              >
                Savings
                <div className="text-xs mt-1">{formatCurrency(child.savingBalance)}</div>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center py-1">
            <ArrowLeftRight className="w-8 h-8 text-blue-600" />
          </div>

          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>To</label>
            <div className={`py-4 px-4 rounded-lg border-2 border-blue-600 bg-blue-50 dark:bg-blue-900 text-center font-semibold text-gray-900`}>
              {fromAccount === 'spending' ? 'Savings' : 'Spending'}
            </div>
          </div>

          <div>
            <label className={`block text-sm font-semibold ${textColor} mb-2`}>Description (optional)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Saving for bike"
              className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Modal
function SettingsModal({ settings, children, onClose, onSave, onEditChild, onDeleteChild, onExport, onImport, onLock, requirePIN, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [pinInput, setPinInput] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPinSetup, setShowPinSetup] = useState(false);
  const [showDisableConfirm, setShowDisableConfirm] = useState(false);
  const [showPinVerify, setShowPinVerify] = useState(false);
  const [verifyPinInput, setVerifyPinInput] = useState('');

  const handleEnablePin = async () => {
    if (pinInput.length < 4) {
      alert('PIN must be at least 4 digits');
      return;
    }
    if (pinInput !== confirmPin) {
      alert('PINs do not match');
      return;
    }

    const hash = await hashPIN(pinInput);
    onSave({ pinEnabled: true, pinHash: hash });
    setPinInput('');
    setConfirmPin('');
    setShowPinSetup(false);
  };

  const handleDisablePin = () => {
    setShowPinVerify(true);
  };

  const verifyAndDisablePin = async () => {
    const hash = await hashPIN(verifyPinInput);
    if (hash === settings.pinHash) {
      setShowPinVerify(false);
      setVerifyPinInput('');
      setShowDisableConfirm(true);
    } else {
      alert('Incorrect PIN');
      setVerifyPinInput('');
    }
  };

  const confirmDisablePin = () => {
    onSave({ pinEnabled: false, pinHash: null });
    setShowDisableConfirm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full`}>
        <div className={`border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${textColor}`}>Settings</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Manage Kids */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center space-x-2 mb-3">
              <Settings className="w-5 h-5 text-blue-600" />
              <span className={`font-semibold ${textColor}`}>Manage Kids</span>
            </div>

            {children.length === 0 ? (
              <p className={`text-sm ${textSecondary} text-center py-4`}>No kids added yet</p>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {children.map(child => (
                  <div
                    key={child.id}
                    onClick={() => requirePIN(() => onEditChild(child))}
                    className={`flex flex-col items-center p-3 rounded-lg border ${borderColor} transition cursor-pointer`}
                  >
                    {child.avatar ? (
                      <img src={child.avatar} alt={child.name} className="w-16 h-16 rounded-full object-cover mb-2" />
                    ) : (
                      <div className={`w-16 h-16 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center mb-2`}>
                        <span className="text-white text-2xl font-bold leading-none">{child.name.charAt(0)}</span>
                      </div>
                    )}
                    <p className={`text-sm font-semibold ${textColor} text-center`}>{child.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center space-x-2">
                <Moon className="w-5 h-5 text-blue-600" />
                <span className={`font-semibold ${textColor}`}>Dark Mode</span>
              </div>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => onSave({ darkMode: e.target.checked })}
                className="w-5 h-5 accent-green-600 border-gray-300 rounded focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </label>
          </div>

          {/* PIN Protection */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span className={`font-semibold ${textColor}`}>PIN Protection</span>
              </div>
              {settings.pinEnabled && (
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                  Enabled
                </span>
              )}
            </div>
            <p className={`text-sm ${textSecondary} mb-3`}>
              Prevent unauthorized access to the app
            </p>

            {!settings.pinEnabled && !showPinSetup && (
              <button
                onClick={() => setShowPinSetup(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Enable PIN
              </button>
            )}

            {showPinSetup && (
              <div className="space-y-3">
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength="6"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (4-6 digits)"
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
                />
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength="6"
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  placeholder="Confirm PIN"
                  className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${cardBg} ${textColor}`}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setShowPinSetup(false);
                      setPinInput('');
                      setConfirmPin('');
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEnablePin}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Save PIN
                  </button>
                </div>
              </div>
            )}

            {settings.pinEnabled && (
              <div className="space-y-2">
                <button
                  onClick={onLock}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                >
                  Lock Now
                </button>
                <button
                  onClick={handleDisablePin}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
                >
                  Disable PIN
                </button>
              </div>
            )}
          </div>

          {/* Data Management */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <div className="flex items-center space-x-2 mb-3">
              <Download className="w-5 h-5 text-blue-600" />
              <span className={`font-semibold ${textColor}`}>Data Management</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={onExport}
                className={`w-full py-2 px-4 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition font-semibold`}
              >
                Export Data
              </button>
              <label className={`w-full py-2 px-4 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition font-semibold cursor-pointer flex items-center justify-center`}>
                <input
                  type="file"
                  accept=".json"
                  onChange={onImport}
                  className="hidden"
                />
                Import Data
              </label>
            </div>
          </div>

          {/* About */}
          <div className={`border ${borderColor} rounded-lg p-4`}>
            <p className={`text-sm ${textSecondary} text-center`}>
              Kids Cash v1.0.0
              <br />
              Built with ❤️ for teaching kids about money
            </p>
          </div>
        </div>
      </div>

      {/* PIN Verification Modal (for disabling) */}
      {showPinVerify && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${cardBg} rounded-xl p-6 max-w-sm w-full`}>
            <h3 className={`text-xl font-bold ${textColor} mb-4`}>Verify PIN</h3>
            <p className={`${textSecondary} mb-4`}>
              Enter your current PIN to disable protection.
            </p>
            <input
              type="password"
              inputMode="numeric"
              maxLength="6"
              value={verifyPinInput}
              onChange={(e) => setVerifyPinInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && verifyAndDisablePin()}
              placeholder="Enter PIN"
              className={`w-full px-4 py-3 rounded-lg border ${borderColor} ${cardBg} ${textColor} text-center text-2xl tracking-widest mb-4`}
            />
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowPinVerify(false);
                  setVerifyPinInput('');
                }}
                className={`flex-1 py-2 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition font-semibold`}
              >
                Cancel
              </button>
              <button
                onClick={verifyAndDisablePin}
                className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition font-semibold"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Disable PIN Confirmation Modal */}
      {showDisableConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${cardBg} rounded-xl p-6 max-w-sm w-full`}>
            <h3 className={`text-xl font-bold ${textColor} mb-4`}>Disable PIN Protection?</h3>
            <p className={`${textSecondary} mb-6`}>
              Are you sure you want to disable PIN protection? This will remove security from your app.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDisableConfirm(false)}
                className={`flex-1 py-2 rounded-lg border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition font-semibold`}
              >
                Cancel
              </button>
              <button
                onClick={confirmDisablePin}
                className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition font-semibold"
              >
                Disable
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Quick Transaction Modal - Kid Selector
function QuickTransactionModal({ children, onClose, onOpenTransaction, onOpenTransfer, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [selectedChildren, setSelectedChildren] = useState([]);

  const toggleChild = (child) => {
    if (selectedChildren.find(c => c.id === child.id)) {
      setSelectedChildren(selectedChildren.filter(c => c.id !== child.id));
    } else {
      setSelectedChildren([...selectedChildren, child]);
    }
  };

  const isSelected = (childId) => selectedChildren.some(c => c.id === childId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col`}>
        <div className={`border-b ${borderColor} p-4 flex items-center justify-between flex-shrink-0`}>
          <h2 className={`text-xl font-bold ${textColor}`}>Save or Spend Money</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <p className={`${textSecondary} mb-4 text-center`}>Select 1 or more Kid(s)</p>
          
          {children.length === 0 ? (
            <div className="text-center py-8">
              <p className={textSecondary}>No kids added yet</p>
              <p className={`text-sm ${textSecondary} mt-2`}>Add a kid first from the home screen</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {children.map(child => (
                <button
                  key={child.id}
                  onClick={() => toggleChild(child)}
                  className={`relative flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                    isSelected(child.id)
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : `${borderColor} `
                  }`}
                >
                  {/* Checkmark for selected */}
                  {isSelected(child.id) && (
                    <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  {/* Avatar */}
                  {child.avatar ? (
                    <img src={child.avatar} alt={child.name} className="w-16 h-16 rounded-full object-cover mb-2" />
                  ) : (
                    <div className={`w-16 h-16 rounded-full ${getAvatarGradient(child.avatarColor)} flex items-center justify-center mb-2`}>
                      <span className="text-white text-2xl font-bold leading-none">{child.name.charAt(0)}</span>
                    </div>
                  )}
                  
                  {/* Name */}
                  <p className={`text-sm font-semibold text-center ${
                    isSelected(child.id) ? 'text-gray-900' : textColor
                  }`}>{child.name}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Transaction Type Buttons - Always Visible */}
        <div className={`border-t ${borderColor} p-4 flex-shrink-0`}>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => {
                if (selectedChildren.length === 0) {
                  alert('Please select at least one kid');
                  return;
                }
                // Pass all selected children IDs
                onOpenTransaction(selectedChildren.map(c => c.id), 'deposit');
              }}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition ${
                selectedChildren.length > 0
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
              }`}
            >
              <Plus className="w-6 h-6" />
              <span className="text-sm font-semibold">Add $</span>
            </button>

            <button
              onClick={() => {
                if (selectedChildren.length === 0) {
                  alert('Please select at least one kid');
                  return;
                }
                // Pass all selected children IDs
                onOpenTransaction(selectedChildren.map(c => c.id), 'withdrawal');
              }}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition ${
                selectedChildren.length > 0
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
              }`}
            >
              <Minus className="w-6 h-6" />
              <span className="text-sm font-semibold">Spend $</span>
            </button>

            <button
              onClick={() => {
                if (selectedChildren.length === 0) {
                  alert('Please select a kid');
                  return;
                }
                // Transfer only works for single kid
                if (selectedChildren.length === 1) {
                  onOpenTransfer(selectedChildren[0]);
                } else {
                  alert('Please select only one kid for transfers');
                }
              }}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition ${
                selectedChildren.length === 1
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
              }`}
            >
              <ArrowLeftRight className="w-6 h-6" />
              <span className="text-sm font-semibold">Transfer</span>
            </button>
          </div>
          {selectedChildren.length > 1 && (
            <p className={`text-xs ${textSecondary} text-center mt-2`}>
              {selectedChildren.length} kids selected
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Edit Transaction Modal
function EditTransactionModal({ transaction, onClose, onDelete, onEdit, requirePIN, darkMode, cardBg, textColor, textSecondary, borderColor }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editAmount, setEditAmount] = useState(transaction.amount);
  const [editDescription, setEditDescription] = useState(transaction.description);

  const handleDeleteClick = () => {
    if (requirePIN) {
      // Close this modal, verify PIN, then delete directly
      onClose();
      requirePIN(() => {
        onDelete(transaction.id);
      });
    } else {
      setShowConfirm(true);
    }
  };

  const handleSaveEdit = () => {
    if (onEdit) {
      onEdit(transaction.id, {
        amount: parseFloat(editAmount),
        description: editDescription
      });
    }
    onClose();
  };

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full`}>
          <div className={`border-b ${borderColor} p-4 flex items-center justify-between`}>
            <h2 className={`text-xl font-bold text-red-600`}>Confirm Delete</h2>
            <button onClick={() => setShowConfirm(false)} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <p className={`${textColor} text-lg`}>Are you sure you want to delete this transaction?</p>
            <p className={`${textSecondary} text-sm`}>This action cannot be undone.</p>
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowConfirm(false)}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(transaction.id);
                  setShowConfirm(false);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${cardBg} rounded-2xl shadow-2xl max-w-md w-full`}>
        <div className={`border-b ${borderColor} p-4 flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${textColor}`}>{isEditing ? 'Edit Transaction' : 'Transaction Details'}</h2>
          <button onClick={onClose} className={`p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${textColor}`}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold ${textSecondary} mb-1`}>Amount</label>
            {isEditing ? (
              <input
                type="number"
                value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${textColor} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              />
            ) : (
              <p className={`text-2xl font-bold ${textColor}`}>{formatCurrency(transaction.amount)}</p>
            )}
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textSecondary} mb-1`}>Description</label>
            {isEditing ? (
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${textColor} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              />
            ) : (
              <p className={`${textColor}`}>{transaction.description}</p>
            )}
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textSecondary} mb-1`}>Date</label>
            <p className={`${textColor}`}>{formatDate(transaction.timestamp)}</p>
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textSecondary} mb-1`}>Account</label>
            <p className={`${textColor} capitalize`}>
              {transaction.accountType === 'split' ? '50/50 Split' : transaction.accountType === 'saving' ? 'Savings' : 'Spending'}
            </p>
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textSecondary} mb-1`}>Type</label>
            <p className={`${textColor} capitalize`}>{transaction.type}</p>
          </div>
          <div className={`pt-4 border-t ${borderColor} space-y-3`}>
            {isEditing ? (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold border ${borderColor} ${textColor} hover:bg-gray-100 hover:text-gray-900 transition`}
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FamilyMoneyManager />);
