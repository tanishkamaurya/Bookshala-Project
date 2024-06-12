
import Visit from '../model/visit.model.js';


// Log a visit date
export const logVisit = async (req, res) => {
  const { userId } = req.body; // Assuming userId is sent in the request body
  const visitDate = new Date();

  try {
    let visit = await Visit.findOne({ userId });
    if (!visit) {
      visit = new Visit({ userId, visitDates: [visitDate] });
    } else {
      visit.visitDates.push(visitDate);
    }
    await visit.save();
    res.status(200).json({ message: 'Visit logged successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging visit' });
  }
};

// Get visit history
export const getVisitHistory = async (req, res) => {
  const { userId } = req.query; // Assuming userId is sent as a query parameter

  try {
    const visit = await Visit.findOne({ userId }).populate('userId');
    if (!visit) {
      return res.status(404).json({ error: 'No visit history found' });
    }
    res.status(200).json(visit.visitDates);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving visit history' });
  }
};
