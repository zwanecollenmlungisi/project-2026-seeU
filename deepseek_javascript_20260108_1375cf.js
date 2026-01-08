document.addEventListener('DOMContentLoaded', async function() {
    console.log('See U App Initializing...');
    
    // Log configuration
    console.log('Supabase URL:', SUPABASE_URL);
    console.log('Supabase Key exists:', !!SUPABASE_ANON_KEY);
    console.log('Supabase client:', supabase);
    
    // Test Supabase connection
    try {
        const { data, error } = await supabase.auth.getSession();
        console.log('Auth session test:', data, error);
    } catch (error) {
        console.error('Supabase connection error:', error);
    }
    
    // ... rest of your initialization code
});