import React, { useState, useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import { validateFileUpload } from '../../utils/validators';
import { formatFileSize } from '../../utils/formatters';

const FileUpload = ({ onFileSelect, accept, maxSize, multiple = false }) => {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const fileInputRef = useRef();

  const handleFileSelect = (selectedFiles) => {
    const fileList = Array.from(selectedFiles);
    const validFiles = [];
    const newErrors = [];

    fileList.forEach(file => {
      const validationErrors = validateFileUpload(file);
      if (validationErrors.length === 0) {
        validFiles.push(file);
      } else {
        newErrors.push(...validationErrors);
      }
    });

    setFiles(multiple ? [...files, ...validFiles] : validFiles);
    setErrors(newErrors);

    if (onFileSelect) {
      onFileSelect(multiple ? [...files, ...validFiles] : validFiles[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : null);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragOver
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-green-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Upload a file
          </button>
          <span className="text-gray-500"> or drag and drop</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          PNG, JPG, PDF up to {formatFileSize(maxSize || 10485760)}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>

      {/* Display selected files */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm text-green-800">{file.name}</span>
                <span className="text-xs text-green-600 ml-2">
                  ({formatFileSize(file.size)})
                </span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-green-600 hover:text-green-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Display errors */}
      {errors.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <ul className="text-sm text-red-600 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
