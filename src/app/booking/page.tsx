import DateReserve from '@/components/DateReserve';

export default function About() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Veneu Booking</div>
            <div className="w-fit space-y-2">
                <DateReserve/>
            </div>
            <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                Book Venue
            </button>
        </main>
    )
}