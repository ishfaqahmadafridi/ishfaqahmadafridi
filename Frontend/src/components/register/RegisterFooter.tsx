import { useNavigate } from 'react-router-dom';

export default function RegisterFooter() {
    const navigate = useNavigate();

    return (
        <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                    onClick={() => navigate('/signin')}
                    className="font-bold text-purple-600 hover:text-purple-700 hover:underline transition-all"
                >
                    Sign in here
                </button>
            </p>
        </div>
    );
}
