import React, { useState } from 'react';

const LessonsPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTips, setReadTips] = useState(new Set());
  const [expandedTips, setExpandedTips] = useState(new Set());

  const tips = [
    {
      id: 'fake-news',
      icon: '🕵️',
      title: 'How to Spot Fake News',
      preview: 'Learn to identify misinformation and teach your children critical thinking skills to navigate today\'s complex information landscape.',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-purple-800',
      iconBg: 'bg-gradient-to-br from-purple-600 to-purple-800',
      content: {
        warningSigns: [
          'Check the source - Is it from a reputable news organization?',
          'Look for emotional language designed to provoke strong reactions',
          'Verify with multiple sources before sharing',
          'Check the date - Old news can be recycled as current',
          'Be skeptical of sensational headlines',
          'Look for author credentials and contact information'
        ],
        teachChildren: [
          'Always ask "Who wrote this and why?"',
          'Use fact-checking websites like Snopes or PolitiFact',
          'Encourage them to pause before sharing',
          'Discuss current events together regularly'
        ],
        examples: [
          {
            headline: 'SHOCKING: Scientists Discover Drinking Hot Water Can Cure COVID-19 - Doctors Don\'t Want You to Know!',
            warning: 'Sensational language, medical misinformation, conspiracy claims, no credible source'
          },
          {
            headline: 'BREAKING: Video Shows Aliens Landing in Mumbai - Government Tries to Cover Up!',
            warning: 'Extraordinary claims, no verification, emotional clickbait, conspiracy theory'
          },
          {
            headline: 'URGENT: WhatsApp Will Start Charging ₹500/month from Tomorrow - Forward to Save Your Account!',
            warning: 'False urgency, chain message format, no official announcement, fear tactics'
          },
          {
            headline: 'This One Weird Trick Will Make You Rich Overnight - Banks Hate This Secret!',
            warning: 'Get rich quick promises, vague claims, clickbait format, too good to be true'
          }
        ]
      }
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: 'Avoiding Oversharing on WhatsApp',
      preview: 'Protect your family\'s privacy by understanding what information should stay private and how to use WhatsApp\'s security features effectively.',
      gradientFrom: 'from-purple-700',
      gradientTo: 'to-indigo-900',
      iconBg: 'bg-gradient-to-br from-purple-700 to-indigo-900',
      content: {
        privacySettings: [
          'Set "Last Seen" to "My Contacts" or "Nobody"',
          'Limit who can see your profile photo and status',
          'Turn off read receipts for privacy',
          'Review group privacy settings regularly',
          'Enable two-step verification',
          'Turn off location sharing by default'
        ],
        avoidSharing: [
          'Home addresses, school names, or work locations',
          'Travel plans or when you\'re away from home',
          'Financial information or personal documents',
          'Photos with identifiable background details',
          'Children\'s full names, ages, or schedules'
        ],
        examples: [
          {
            headline: 'URGENT: Your bank account will be CLOSED in 24 hours! Click this link immediately to verify: bit.ly/bank-verify-urgent',
            warning: 'Urgent language, suspicious shortened link, no official bank branding'
          },
          {
            headline: 'Congratulations! You\'ve WON ₹50,000 in our lucky draw! Send your Aadhaar & bank details to claim: +91-98765-XXXX',
            warning: 'Unexpected prize, asking for sensitive documents, unknown number'
          },
          {
            headline: 'Hi Mom, my phone is damaged. This is my new number. Please send ₹10,000 urgently for emergency. Don\'t call, just send money.',
            warning: 'Impersonation, money request, avoiding voice contact'
          }
        ]
      }
    },
    {
      id: 'screen-time',
      icon: '⏰',
      title: 'Healthy Screen Time Habits',
      preview: 'Establish balanced digital habits for your family with practical strategies for managing screen time without constant battles.',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
      content: {
        ageGuidelines: [
          'Ages 2-5: Maximum 1 hour of high-quality content daily',
          'Ages 6+: Consistent limits that don\'t interfere with sleep/activities',
          'No screens during meals or before bedtime',
          'Create screen-free zones in bedrooms',
          'Encourage breaks every 30-60 minutes'
        ],
        healthyHabits: [
          'Model good screen behavior yourself',
          'Create a family media plan together',
          'Prioritize outdoor activities and face-to-face interaction',
          'Use parental controls and screen time apps',
          'Make bedrooms screen-free spaces',
          'Plan engaging offline activities'
        ]
      }
    }
  ];

  const toggleDetails = (tipId) => {
    const newExpandedTips = new Set(expandedTips);
    if (expandedTips.has(tipId)) {
      newExpandedTips.delete(tipId);
    } else {
      newExpandedTips.add(tipId);
      setReadTips(prev => new Set([...prev, tipId]));
    }
    setExpandedTips(newExpandedTips);
  };

  const toggleBookmark = (tipId, title) => {
    if (bookmarks.some(b => b.id === tipId)) {
      setBookmarks(prev => prev.filter(b => b.id !== tipId));
    } else {
      setBookmarks(prev => [...prev, { id: tipId, title }]);
    }
  };

  const removeBookmark = (tipId) => {
    setBookmarks(prev => prev.filter(b => b.id !== tipId));
  };

  const isBookmarked = (tipId) => bookmarks.some(b => b.id === tipId);
  const isExpanded = (tipId) => expandedTips.has(tipId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 via-purple-50 to-lavender-100 rounded-3xl shadow-2xl overflow-hidden border border-purple-200">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-900 text-slate-50 py-16 px-8 text-center border-b-4 border-purple-400">
          <h1 className="text-4xl font-bold mb-4">🛡️ Digital Awareness Tips for Parents</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Essential guidance to help your family navigate the digital world safely and responsibly
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-900 text-slate-50 py-6 px-8 flex justify-around flex-wrap gap-6 border-b-4 border-purple-400">
          <div className="text-center">
            <span className="block text-3xl font-bold">{tips.length}</span>
            <span className="text-sm opacity-80">Expert Tips</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold">{bookmarks.length}</span>
            <span className="text-sm opacity-80">Bookmarked</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold">{readTips.size}</span>
            <span className="text-sm opacity-80">Tips Read</span>
          </div>
        </div>

        <div className="p-10">
          {/* Tips Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-purple-400"
              >
                {/* Card Header */}
                <div className="p-8 pb-0">
                  <div className={`w-16 h-16 ${tip.iconBg} rounded-2xl flex items-center justify-center text-2xl text-white mb-4`}>
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-100 mb-3">{tip.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{tip.preview}</p>
                </div>

                {/* Card Content */}
                <div className="px-8 pb-8">
                  {/* Expanded Details */}
                  {isExpanded(tip.id) && (
                    <div className="mt-4 pt-4 border-t border-slate-600">
                      {/* Fake News Content */}
                      {tip.id === 'fake-news' && (
                        <>
                          <h4 className="font-semibold text-purple-200 mb-3">Key Warning Signs:</h4>
                          <ul className="space-y-2 mb-6">
                            {tip.content.warningSigns.map((sign, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{sign}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-semibold text-purple-200 mb-3">Teach Your Children:</h4>
                          <ul className="space-y-2 mb-6">
                            {tip.content.teachChildren.map((item, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-semibold text-purple-200 mb-3">⚠️ Examples of Fake News Headlines to Watch For:</h4>
                          <div className="space-y-3">
                            {tip.content.examples.map((example, index) => (
                              <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-pink-200 rounded-xl p-4">
                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold inline-block mb-2">
                                  ❌ FAKE NEWS EXAMPLE
                                </div>
                                <p className="italic text-slate-800 mb-2 p-2 bg-white bg-opacity-70 rounded">
                                  <strong>"{example.headline}"</strong>
                                </p>
                                <div className="text-xs text-red-700 font-semibold mt-2 p-2 bg-red-100 bg-opacity-50 rounded">
                                  🚨 Red flags: {example.warning}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* WhatsApp Content */}
                      {tip.id === 'whatsapp' && (
                        <>
                          <h4 className="font-semibold text-purple-200 mb-3">Privacy Settings to Check:</h4>
                          <ul className="space-y-2 mb-6">
                            {tip.content.privacySettings.map((setting, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{setting}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-semibold text-purple-200 mb-3">What NOT to Share:</h4>
                          <ul className="space-y-2 mb-6">
                            {tip.content.avoidSharing.map((item, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-semibold text-purple-200 mb-3">⚠️ Common Fraud Messages to Watch Out For:</h4>
                          <div className="space-y-3">
                            {tip.content.examples.map((example, index) => (
                              <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-pink-200 rounded-xl p-4">
                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold inline-block mb-2">
                                  ❌ FAKE MESSAGE EXAMPLE
                                </div>
                                <p className="italic text-slate-800 mb-2 p-2 bg-white bg-opacity-70 rounded">
                                  <strong>"{example.headline}"</strong>
                                </p>
                                <div className="text-xs text-red-700 font-semibold mt-2 p-2 bg-red-100 bg-opacity-50 rounded">
                                  🚨 Red flags: {example.warning}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Screen Time Content */}
                      {tip.id === 'screen-time' && (
                        <>
                          <h4 className="font-semibold text-purple-200 mb-3">Age-Appropriate Guidelines:</h4>
                          <ul className="space-y-2 mb-6">
                            {tip.content.ageGuidelines.map((guideline, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{guideline}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-semibold text-purple-200 mb-3">Healthy Habits to Build:</h4>
                          <ul className="space-y-2">
                            {tip.content.healthyHabits.map((habit, index) => (
                              <li key={index} className="flex items-start text-slate-300 leading-relaxed">
                                <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                                <span className="flex-1">{habit}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      onClick={() => toggleDetails(tip.id)}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>📖</span>
                      {isExpanded(tip.id) ? 'Read Less' : 'Read More'}
                    </button>
                    
                    <button
                      onClick={() => toggleBookmark(tip.id, tip.title)}
                      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                        isBookmarked(tip.id)
                          ? 'bg-gradient-to-r from-purple-700 to-indigo-900 text-white'
                          : 'bg-gradient-to-r from-purple-400 to-purple-600 text-slate-800'
                      }`}
                    >
                      <span>{isBookmarked(tip.id) ? '⭐' : '🔖'}</span>
                      {isBookmarked(tip.id) ? 'Bookmarked' : 'Bookmark'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bookmarks Section */}
          <div className="mt-12 pt-8 border-t-2 border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-slate-700">📌 Your Bookmarked Tips</h2>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {bookmarks.length}
              </span>
            </div>
            
            <div className="grid gap-4">
              {bookmarks.length === 0 ? (
                <div className="text-center text-slate-400 py-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-dashed border-purple-400">
                  <p>🔖 No bookmarks yet! Click the bookmark button on any tip to save it for later reference.</p>
                </div>
              ) : (
                bookmarks.map((bookmark) => (
                  <div key={bookmark.id} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border-l-4 border-purple-600">
                    <h4 className="text-purple-100 font-semibold mb-2">{bookmark.title}</h4>
                    <p className="text-slate-300 mb-3">Bookmarked tip - click "Read More" above to view full details</p>
                    <button
                      onClick={() => removeBookmark(bookmark.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 border border-purple-400 rounded-lg text-sm hover:bg-purple-50 transition-colors"
                    >
                      <span>🗑️</span> Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
