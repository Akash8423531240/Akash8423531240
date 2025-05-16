// models/Analytics.js
const mongoose = require('mongoose');
const analyticsSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sessionId: { type: String },
  timestamp: { type: Date, default: Date.now },
  data: { type: Object }
});
module.exports = mongoose.model('Analytics', analyticsSchema);

// controllers/analyticsController.js
const Analytics = require('../models/Analytics');
exports.logEvent = async (req, res) => {
  const { eventType, sessionId, data } = req.body;
  const userId = req.user ? req.user.id : null;
  await Analytics.create({ eventType, userId, sessionId, data });
  res.status(200).send('Event logged');
};
exports.getReport = async (req, res) => {
  const summary = await Analytics.aggregate([
    { $group: { _id: '$eventType', count: { $sum: 1 } } }
  ]);
  res.json(summary);
};

// Frontend Hook: useAnalyticsEvent.js
import { useEffect } from 'react';
import axios from 'axios';
const useAnalyticsEvent = (eventName, data) => {
  useEffect(() => {
    axios.post('/api/analytics/log', { eventType: eventName, sessionId: 'session-id', data });
  }, [eventName, data]);
};
export default useAnalyticsEvent;
