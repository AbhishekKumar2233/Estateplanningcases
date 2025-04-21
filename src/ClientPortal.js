import React, { useState } from "react";

import {
  Clock,
  File,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  MessageCircle,
  User,
  LogOut,
} from "lucide-react";

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample client data

  const clientData = {
    name: "John Smith",

    email: "john@example.com",

    phone: "555-123-4567",

    matterNumber: "EP-2025-001",

    attorney: "Jane Wilson",

    paralegal: "Mark Davis",

    startDate: "April 8, 2025",

    status: "In Progress",

    milestones: [
      {
        id: 1,

        name: "Documents Sent",

        status: "completed",

        date: "April 10, 2025",

        description: "Initial estate planning documents sent for review",
      },

      {
        id: 2,

        name: "Documents Signed",

        status: "pending",

        dueDate: "June 9, 2025",

        description: "Sign and return all estate planning documents",
      },

      {
        id: 3,

        name: "Instructions Provided",

        status: "not-started",

        description:
          "Receive instructions for beneficiary designations and trust funding",
      },
    ],

    documents: [
      {
        id: 1,

        name: "Will Draft.pdf",

        type: "document",

        date: "April 10, 2025",

        size: "345 KB",

        status: "Requires Review",
      },

      {
        id: 2,

        name: "Trust Agreement.pdf",

        type: "document",

        date: "April 10, 2025",

        size: "892 KB",

        status: "Requires Review",
      },

      {
        id: 3,

        name: "Power of Attorney.pdf",

        type: "document",

        date: "April 10, 2025",

        size: "256 KB",

        status: "Requires Review",
      },

      {
        id: 4,

        name: "Health Care Directive.pdf",

        type: "document",

        date: "April 10, 2025",

        size: "198 KB",

        status: "Requires Review",
      },
    ],

    messages: [
      {
        id: 1,

        sender: "Jane Wilson",

        date: "April 10, 2025",

        time: "3:45 PM",

        content:
          "Hello John, I've uploaded your draft estate planning documents for review. Please look them over and let me know if you have any questions or needed changes. Once you've reviewed everything, we can schedule a time for you to come in and sign the documents.",

        isUnread: false,
      },

      {
        id: 2,

        sender: "Mark Davis",

        date: "April 14, 2025",

        time: "10:12 AM",

        content:
          "Just checking in to see if you've had a chance to review the documents. Please let us know if you need any clarification on any of the terms or provisions.",

        isUnread: true,
      },
    ],

    appointments: [
      {
        id: 1,

        title: "Document Signing Appointment",

        date: "Not yet scheduled",

        status: "Pending",

        with: "Jane Wilson",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}

      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Estate Planning Client Portal</h1>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />

              <span>{clientData.name}</span>
            </div>

            <button className="bg-blue-800 hover:bg-blue-900 rounded px-3 py-1 flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}

      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto flex">
          <button
            className={`px-4 py-3 ${
              activeTab === "dashboard" ? "bg-blue-900" : "hover:bg-blue-700"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={`px-4 py-3 ${
              activeTab === "documents" ? "bg-blue-900" : "hover:bg-blue-700"
            }`}
            onClick={() => setActiveTab("documents")}
          >
            Documents
          </button>

          <button
            className={`px-4 py-3 ${
              activeTab === "messages" ? "bg-blue-900" : "hover:bg-blue-700"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
            {clientData.messages.some((m) => m.isUnread) && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
                {clientData.messages.filter((m) => m.isUnread).length}
              </span>
            )}
          </button>

          <button
            className={`px-4 py-3 ${
              activeTab === "appointments" ? "bg-blue-900" : "hover:bg-blue-700"
            }`}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </button>
        </div>
      </nav>

      {/* Main Content */}

      <main className="flex-grow container mx-auto p-4 md:p-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Your Estate Planning Progress
              </h2>

              {/* Status Overview */}

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="flex items-center">
                    <div className="text-gray-500 mr-2">Matter Number:</div>

                    <div className="font-medium">{clientData.matterNumber}</div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gray-500 mr-2">Attorney:</div>

                    <div className="font-medium">{clientData.attorney}</div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gray-500 mr-2">Paralegal:</div>

                    <div className="font-medium">{clientData.paralegal}</div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gray-500 mr-2">Start Date:</div>

                    <div className="font-medium">{clientData.startDate}</div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-gray-500 mr-2">Status:</div>

                    <div className="font-medium">
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        {clientData.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone Timeline */}

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Your Progress</h3>

                <div className="relative">
                  {/* Vertical timeline line */}

                  <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200"></div>

                  {/* Milestones */}

                  <div className="space-y-8 relative z-10">
                    {clientData.milestones.map((milestone, index) => (
                      <div key={milestone.id} className="flex">
                        <div className="flex-shrink-0 flex items-center justify-center">
                          {milestone.status === "completed" ? (
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                          ) : milestone.status === "pending" ? (
                            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                              <Clock className="w-5 h-5" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-white">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                          )}
                        </div>

                        <div className="ml-4 flex-grow pb-2">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-900">
                              {milestone.name}
                            </div>

                            {milestone.status === "completed" && (
                              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                Completed
                              </span>
                            )}

                            {milestone.status === "pending" && (
                              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            )}

                            {milestone.status === "not-started" && (
                              <span className="ml-2 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                                Not Started
                              </span>
                            )}
                          </div>

                          <div className="text-sm text-gray-500 mt-1">
                            {milestone.description}
                          </div>

                          {milestone.date && (
                            <div className="text-sm text-gray-500 mt-1">
                              Completed on: {milestone.date}
                            </div>
                          )}

                          {milestone.dueDate &&
                            milestone.status !== "completed" && (
                              <div className="text-sm text-gray-500 mt-1">
                                Due by: {milestone.dueDate}
                              </div>
                            )}

                          {milestone.id === 2 &&
                            milestone.status === "pending" && (
                              <div className="mt-3">
                                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">
                                  Schedule Signing Appointment
                                </button>
                              </div>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Steps */}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium flex items-center text-yellow-800">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Your Next Step
                </h3>

                <p className="mt-2">
                  Please review the documents that have been uploaded to your
                  portal. After reviewing, you'll need to schedule an
                  appointment to sign the documents.
                </p>

                <div className="mt-3 flex space-x-3">
                  <button
                    className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
                    onClick={() => setActiveTab("documents")}
                  >
                    View Documents
                  </button>

                  <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded">
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 pl-4 py-2">
                  <div className="text-sm text-gray-500">April 10, 2025</div>

                  <div className="font-medium">Documents Uploaded</div>

                  <div className="text-gray-600 text-sm">
                    Your estate planning documents have been uploaded for your
                    review.
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-2">
                  <div className="text-sm text-gray-500">April 10, 2025</div>

                  <div className="font-medium">Message Received</div>

                  <div className="text-gray-600 text-sm">
                    You have a new message from Jane Wilson.
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-2">
                  <div className="text-sm text-gray-500">April 8, 2025</div>

                  <div className="font-medium">Case Started</div>

                  <div className="text-gray-600 text-sm">
                    Your estate planning case has been created.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Your Documents</h2>

              <p className="text-gray-500 mt-1">
                Review and manage your estate planning documents.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <div className="text-lg font-medium">Documents to Review</div>

                <div className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Action Required
                </div>
              </div>

              <div className="space-y-3">
                {clientData.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 bg-gray-100 w-10 h-10 rounded flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="ml-4 flex-grow">
                      <div className="font-medium">{doc.name}</div>

                      <div className="text-sm text-gray-500 flex items-center">
                        <span>{doc.date}</span>

                        <span className="mx-2">•</span>

                        <span>{doc.size}</span>
                      </div>
                    </div>

                    <div className="ml-4 flex-shrink-0">
                      <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        {doc.status}
                      </span>
                    </div>

                    <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 mb-4">
                <div className="text-lg font-medium">Upload Documents</div>

                <p className="text-gray-500 text-sm mt-1">
                  Upload any additional documents required for your estate
                  planning.
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />

                <div className="text-gray-600 mb-2">
                  Drag and drop files here, or click to browse
                </div>

                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">
                  Upload Files
                </button>

                <div className="text-xs text-gray-500 mt-2">
                  Supported formats: PDF, DOC, DOCX, JPG, PNG (Max size: 10MB)
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Messages</h2>

              <p className="text-gray-500 mt-1">
                Communicate with your attorney and legal team.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <div className="text-lg font-medium">Inbox</div>

                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  New Message
                </button>
              </div>

              <div className="space-y-4">
                {clientData.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`border rounded-lg p-4 ${
                      message.isUnread
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex justify-between">
                      <div className="font-medium">{message.sender}</div>

                      <div className="text-sm text-gray-500">
                        {message.date} at {message.time}
                        {message.isUnread && (
                          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-600"></span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 text-gray-700">{message.content}</div>

                    <div className="mt-3 flex space-x-2">
                      <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded text-sm">
                        Reply
                      </button>

                      {message.isUnread && (
                        <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded text-sm">
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Appointments</h2>

              <p className="text-gray-500 mt-1">
                Schedule and manage your appointments.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <div className="text-lg font-medium">Upcoming Appointments</div>

                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">
                  Schedule New Appointment
                </button>
              </div>

              {clientData.appointments.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-500">
                    You don't have any upcoming appointments.
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {clientData.appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex justify-between">
                        <div className="font-medium">{appointment.title}</div>

                        <div>
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                            {appointment.status}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 text-gray-700">
                        <div>Date: {appointment.date}</div>

                        <div>With: {appointment.with}</div>
                      </div>

                      <div className="mt-3">
                        <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">
                          Schedule Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 mb-4">
                <div className="text-lg font-medium">Available Time Slots</div>

                <p className="text-gray-500 text-sm mt-1">
                  Select a time slot for your document signing appointment.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">
                      Tuesday, April 22, 2025
                    </h4>

                    <div className="space-y-2">
                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        10:00 AM - 11:00 AM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        2:00 PM - 3:00 PM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        4:00 PM - 5:00 PM
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Wednesday, April 23, 2025
                    </h4>

                    <div className="space-y-2">
                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        9:00 AM - 10:00 AM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        1:00 PM - 2:00 PM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        3:00 PM - 4:00 PM
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Thursday, April 24, 2025
                    </h4>

                    <div className="space-y-2">
                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        11:00 AM - 12:00 PM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        1:30 PM - 2:30 PM
                      </button>

                      <button className="w-full text-left border rounded p-2 hover:bg-blue-50 hover:border-blue-300">
                        3:30 PM - 4:30 PM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <div className="text-sm">
            © 2025 Your Law Firm. All Rights Reserved.
          </div>

          <div className="mt-2 text-xs text-gray-400">
            <a href="#" className="hover:text-white mr-4">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white mr-4">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientPortal;
