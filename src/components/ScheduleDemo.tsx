import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';


const ScheduleDemo = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to Transform Your Delivery Operations?
      </h2>
      <p className="text-xl text-gray-700 mb-8">
        Join industry leaders who've revolutionized their delivery business with LinqOps
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
            Schedule Demo 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        {/* <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg">
          Schedule Demo
        </Button> */}
      </div>
    </div>
  </div>
  )
}

export default ScheduleDemo
