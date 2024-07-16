const { supabase } = require('../config/db');

const getTasks = async (req, res) => {
    const { userId } = req.user;
    let { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        return res.status(500).json({ error: 'Error fetching tasks' });
    }

    res.json(data);
};

const createTask = async (req, res) => {
    const { title, description } = req.body;
    const { userId } = req.user;

    const { data, error } = await supabase
        .from('tasks')
        .insert([{ title, description, user_id: userId }]);

    if (error) {
        return res.status(500).json({ error: 'Error creating task' });
    }

    res.status(201).json(data);
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const { data, error } = await supabase
        .from('tasks')
        .update({ title, description })
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: 'Error updating task' });
    }

    res.json(data);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: 'Error deleting task' });
    }

    res.status(204).end();
};

module.exports = { getTasks, createTask, updateTask, deleteTask };