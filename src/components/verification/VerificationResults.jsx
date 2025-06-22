import React from 'react';
import { CheckCircle, XCircle, Download, Share } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { formatDateTime } from '../../utils/formatters';

const VerificationResults = ({ result, onDownloadReport, onShare }) => {
  if (!result) return null;

  const isVerified = result.verificationStatus === 'VERIFIED';

  return (
    <div className={`p-6 rounded-lg border-2 ${
      isVerified
        ? 'border-green-200 bg-green-50'
        : 'border-red-200 bg-red-50'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Verification Results</h3>
        <StatusBadge
          status={result.verificationStatus}
          confidence={result.confidence}
        />
      </div>

      {isVerified ? (
        <div className="space-y-4">
          <div className="flex items-center text-green-700">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Certificate Successfully Verified</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Student Name</label>
              <p className="text-sm text-gray-900">{result.studentName || 'N/A'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Certificate Number</label>
              <p className="text-sm text-gray-900">{result.certificateNumber || 'N/A'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Degree</label>
              <p className="text-sm text-gray-900">{result.degreeName || 'N/A'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">University</label>
              <p className="text-sm text-gray-900">{result.universityName || 'N/A'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Issuance Date</label>
              <p className="text-sm text-gray-900">{result.issuanceDate || 'N/A'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Verification Date</label>
              <p className="text-sm text-gray-900">
                {result.verificationTimestamp ? formatDateTime(result.verificationTimestamp) : 'N/A'}
              </p>
            </div>
          </div>

          {result.blockchainHash && (
            <div>
              <label className="text-sm font-medium text-gray-600">Blockchain Hash</label>
              <p className="text-sm text-gray-900 font-mono break-all">
                {result.blockchainHash}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-green-200">
            <div className="text-sm text-green-700">
              Confidence Score: {result.confidence ? Math.round(result.confidence * 100) : 'N/A'}%
            </div>
            <div className="flex space-x-2">
              {onDownloadReport && (
                <button
                  onClick={onDownloadReport}
                  className="inline-flex items-center px-3 py-2 border border-green-300 rounded-md text-sm font-medium text-green-700 bg-white hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download Report
                </button>
              )}
              {onShare && (
                <button
                  onClick={onShare}
                  className="inline-flex items-center px-3 py-2 border border-green-300 rounded-md text-sm font-medium text-green-700 bg-white hover:bg-green-50"
                >
                  <Share className="w-4 h-4 mr-1" />
                  Share
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center text-red-700">
            <XCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Certificate Verification Failed</span>
          </div>

          {result.error && (
            <div className="p-3 bg-red-100 border border-red-200 rounded-md">
              <p className="text-sm text-red-800">{result.error}</p>
            </div>
          )}

          <div className="text-sm text-red-700">
            <p>Possible reasons for failure:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Certificate is not authentic or has been tampered with</li>
              <li>Certificate is not in our verification database</li>
              <li>Image quality is too poor for analysis</li>
              <li>Certificate format is not supported</li>
            </ul>
          </div>

          <div className="text-sm text-gray-600">
            If you believe this is an error, please contact the issuing institution directly
            or try uploading a higher quality image of the certificate.
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationResults;
