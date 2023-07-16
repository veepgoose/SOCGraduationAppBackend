import { connection } from '../database/dbLink.js';
export const createAttendee = async (name, email, staying_monday, hackathon_interest, staying_tuesday, going_out_interest) => {
        try {
            const { data, error } = await connection.from('attendees').insert({
              name,
              email,
              staying_monday,
              hackathon_interest,
              staying_tuesday,
              going_out_interest,
            });
        
            if (error) {
              console.error('Error creating attendee:', error);
              throw error;
            }
        
            console.log('Attendee created:', data);
            return data;
          } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
};