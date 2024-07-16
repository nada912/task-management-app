const { supabase } = require('../config/db');

const getTasks = async (userId) => {
    let { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId);

    return { data, error };
};

module.exports = { getTasks };