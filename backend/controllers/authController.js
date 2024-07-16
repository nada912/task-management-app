const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { supabase } = require('../config/db');

const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');

const googleLogin = async (req, res) => {
    const { tokenId } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: 'YOUR_GOOGLE_CLIENT_ID',
    });
    const { name, email, picture } = ticket.getPayload();

    let { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

    if (!data) {
        ({ data, error } = await supabase.from('users').insert([
            { name, email, picture }
        ]).single());
    }

    const token = jwt.sign({ userId: data.id }, 'YOUR_JWT_SECRET', { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { googleLogin };